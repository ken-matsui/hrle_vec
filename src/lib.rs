#![doc = include_str!("../README.md")]
#![deny(rustdoc::broken_intra_doc_links)]

mod impls;
mod iter;
mod parse;

use std::hash::Hash;
use std::num::NonZeroUsize;
use std::slice::SliceIndex;

#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct HrleVec<T> {
    runs: Vec<InternalRun<T>>,
}

/// Represent a run inside the [`HrleVec`], can be obtained from the
/// [`runs`](struct.HrleVec.html#method.runs).  A run is a series of the same
/// value.
///
/// # Examples
///
/// ```
/// # use hrle_vec::{HrleVec, Run};
/// let hrle = HrleVec::from(&[1, 2, 3, 1, 2, 3, 3][..]);
///
/// let mut iterator = hrle.runs();
/// assert_eq!(
///     iterator.next(),
///     Some(Run {
///         start: 0,
///         len: 6,
///         values: &vec![1, 2, 3],
///     })
/// );
/// assert_eq!(
///     iterator.next(),
///     Some(Run {
///         start: 6,
///         len: 1,
///         values: &vec![3],
///     })
/// );
/// assert_eq!(iterator.next(), None);
/// ```
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct Run<T> {
    /// The start index of this run.
    pub start: usize,
    /// The length of this run.
    pub len: usize,
    /// The values of this run.
    pub values: T,
}
type RunRef<'a, T> = Run<&'a Vec<T>>;

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub(crate) struct InternalRun<T> {
    /// The end index of this run.
    end: usize,
    /// The number of times values are repeated.
    repeat: usize,
    /// The values of this run.
    values: Vec<T>,
}

impl<T> HrleVec<T> {
    /// Constructs a new empty [`HrleVec`].
    ///
    /// The [`HrleVec`] will not allocate until elements are pushed onto it.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let hrle = HrleVec::<i32>::new();
    /// ```
    pub fn new() -> Self {
        Self { runs: Vec::new() }
    }

    /// Constructs a new empty [`HrleVec`] with capacity for the number of runs.
    ///
    /// Choosing this value requires knowledge about the composition of the data
    /// that is going to be inserted.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::<i32>::with_capacity(10);
    ///
    /// // The [`HrleVec`] contains no items, even though it has capacity for more
    /// assert_eq!(hrle.len(), 0);
    ///
    /// // These are all done without reallocating...
    /// for i in 0..10 {
    ///    hrle.push_unencoded(i);
    /// }
    /// hrle.encode();
    ///
    /// // The [`HrleVec`] contains 10 runs and 10 elements too.
    /// assert_eq!(hrle.len(), 10);
    /// assert_eq!(hrle.runs_len(), 10);
    /// ```
    pub fn with_capacity(capacity: usize) -> Self {
        Self {
            runs: Vec::with_capacity(capacity),
        }
    }

    /// Returns `true` if the [`HrleVec`] contains no elements.
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// assert!(hrle.is_empty());
    ///
    /// hrle.push_unencoded(1);
    /// assert!(!hrle.is_empty());
    /// ```
    pub fn is_empty(&self) -> bool {
        self.runs.is_empty()
    }

    /// Clears the vector, removing all values.
    ///
    /// Note that this method has no effect on the allocated capacity of the vector.
    ///
    /// # Time Complexity
    ///
    /// O(n)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::from(&[1, 1, 1, 1, 2, 2, 3][..]);
    ///
    /// hrle.clear();
    /// assert!(hrle.is_empty());
    /// ```
    pub fn clear(&mut self) {
        self.runs.clear();
    }

    /// Returns an iterator that can be used to iterate over the runs.
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::{HrleVec, Run};
    /// let hrle = HrleVec::from(&[1, 2, 3, 1, 2, 3, 3][..]);
    ///
    /// let mut iterator = hrle.runs();
    /// assert_eq!(
    ///     iterator.next(),
    ///     Some(Run {
    ///         start: 0,
    ///         len: 6,
    ///         values: &vec![1, 2, 3],
    ///     })
    /// );
    /// assert_eq!(
    ///     iterator.next(),
    ///     Some(Run {
    ///         start: 6,
    ///         len: 1,
    ///         values: &vec![3],
    ///     })
    /// );
    /// assert_eq!(iterator.next(), None);
    /// ```
    pub fn runs(&self) -> iter::Runs<T> {
        iter::Runs {
            hrle: self,
            run_index: 0,
        }
    }

    /// Returns an iterator over values.  Comparable to a `Vec` iterator.
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// hrle.push_unencoded(1);
    /// hrle.push_unencoded(1);
    /// hrle.push_unencoded(2);
    /// hrle.push_unencoded(3);
    /// hrle.encode();
    ///
    /// let mut iterator = hrle.iter();
    ///
    /// assert_eq!(iterator.next(), Some(&1));
    /// assert_eq!(iterator.next(), Some(&1));
    /// assert_eq!(iterator.next(), Some(&2));
    /// assert_eq!(iterator.next(), Some(&3));
    /// assert_eq!(iterator.next(), None);
    /// ```
    pub fn iter(&self) -> iter::Iter<T> {
        iter::Iter {
            hrle: self,
            index: 0,
            run_index: 0,
            index_back: self.len(), // starts out of range
            run_index_back: self.runs.len().saturating_sub(1),
        }
    }

    /// Returns the number of runs
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// assert_eq!(hrle.runs_len(), 0);
    ///
    /// hrle.push_unencoded(1);
    /// hrle.push_unencoded(1);
    /// hrle.encode();
    /// assert_eq!(hrle.runs_len(), 1);
    ///
    /// hrle.push_unencoded(2);
    /// hrle.push_unencoded(3);
    /// hrle.encode();
    /// assert_eq!(hrle.runs_len(), 3);
    /// ```
    pub fn runs_len(&self) -> usize {
        self.runs.len()
    }

    /// Returns the number of elements in the [`HrleVec`].
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// hrle.push_unencoded(1);
    /// hrle.push_unencoded(1);
    /// hrle.push_unencoded(2);
    ///
    /// assert_eq!(hrle.len(), 3);
    /// ```
    pub fn len(&self) -> usize {
        match self.runs.last() {
            Some(run) => run.end + 1,
            None => 0,
        }
    }

    /// Returns the last run, or None if it is empty.
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::{HrleVec, Run};
    /// let mut hrle = HrleVec::new();
    ///
    /// assert_eq!(hrle.last_run(), None);
    ///
    /// hrle.push_unencoded(1);
    /// hrle.push_unencoded(1);
    /// hrle.push_unencoded(1);
    /// hrle.push_unencoded(1);
    /// hrle.encode();
    ///
    /// assert_eq!(
    ///     hrle.last_run(),
    ///     Some(Run {
    ///         start: 0,
    ///         len: 4,
    ///         values: &vec![1],
    ///     })
    /// );
    ///
    /// hrle.push_unencoded(2);
    /// hrle.push_unencoded(2);
    /// hrle.push_unencoded(3);
    /// hrle.encode();
    ///
    /// assert_eq!(hrle, HrleVec::from(&[1, 1, 1, 1, 2, 2, 3][..]));
    /// assert_eq!(
    ///     hrle.last_run(),
    ///     Some(Run {
    ///         start: 6,
    ///         len: 1,
    ///         values: &vec![3],
    ///     })
    /// );
    /// ```
    pub fn last_run(&self) -> Option<RunRef<T>> {
        let prev_end = if self.runs.len() >= 2 {
            self.runs[self.runs.len() - 2].end + 1
        } else {
            0
        };

        self.runs.last().map(|run| RunRef {
            start: prev_end,
            len: run.end + 1 - prev_end,
            values: &run.values,
        })
    }

    /// Returns the last value, or None if it is empty.
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let hrle = HrleVec::from(&[10, 10, 40, 40, 30][..]);
    /// assert_eq!(hrle.last(), Some(&30));
    ///
    /// let hrle = HrleVec::from(&[10, 10, 20, 30, 20, 30][..]);
    /// assert_eq!(hrle.last(), Some(&30));
    ///
    /// let hrle = HrleVec::<i32>::new();
    /// assert_eq!(hrle.last(), None);
    /// ```
    pub fn last(&self) -> Option<&T> {
        match self.runs.last() {
            Some(InternalRun { values, .. }) => values.last(),
            None => None,
        }
    }

    /// Returns the index of the run containing the value with the given index.
    ///
    /// # Time Complexity
    ///
    /// O(log n)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let hrle = HrleVec::from(&[1, 1, 2, 3, 2, 3, 4][..]);
    /// assert_eq!(hrle.run_index(0), 0);
    /// assert_eq!(hrle.run_index(1), 0);
    /// assert_eq!(hrle.run_index(2), 1);
    /// assert_eq!(hrle.run_index(3), 1);
    /// assert_eq!(hrle.run_index(4), 1);
    /// assert_eq!(hrle.run_index(5), 1);
    /// assert_eq!(hrle.run_index(6), 2);
    /// ```
    pub fn run_index(&self, index: usize) -> usize {
        match self.runs.binary_search_by(|run| run.end.cmp(&index)) {
            Ok(ri) => ri,
            Err(ri) if ri < self.runs.len() => ri,
            _ => panic!(
                "index out of bounds: the len is {} but the index is {}",
                self.len(),
                index
            ),
        }
    }

    /// Returns the start index of the run with the given index.
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let hrle = HrleVec::from(&[1, 1, 2, 3, 2, 3, 4][..]);
    /// assert_eq!(hrle.runs_len(), 3);
    /// assert_eq!(hrle.run_start(0), 0);
    /// assert_eq!(hrle.run_start(1), 2);
    /// assert_eq!(hrle.run_start(2), 6);
    ///
    /// // No more runs...
    /// assert_eq!(hrle.run_start(3), 7);
    /// ```
    ///
    /// You cannot get the start index of a run that does not exist.
    ///
    /// ```should_panic
    /// # use hrle_vec::HrleVec;
    /// # let hrle = HrleVec::from(&[1, 1, 2, 3, 2, 3, 4][..]);
    /// assert_eq!(hrle.run_start(4), 7);
    /// assert_eq!(hrle.run_start(usize::MAX), 7);
    /// ```
    pub fn run_start(&self, run_index: usize) -> usize {
        if run_index == 0 {
            0
        } else {
            self.runs[run_index - 1].end + 1
        }
    }

    /// Returns the run at the given index, or None if it does not exist.
    ///
    /// # Time Complexity
    ///
    /// O(1)
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::{HrleVec, Run};
    /// let hrle = HrleVec::from(&[1, 2, 3, 1, 2, 3, 3][..]);
    ///
    /// assert_eq!(
    ///     hrle.get_run(1),
    ///     Some(Run {
    ///         start: 6,
    ///         len: 1,
    ///         values: &vec![3],
    ///     })
    /// );
    /// assert_eq!(hrle.get_run(2), None);
    /// ```
    pub fn get_run(&self, run_index: usize) -> Option<RunRef<T>> {
        self.runs.get(run_index).map(|internal_run| {
            let start = self.run_start(run_index);
            RunRef {
                start,
                len: internal_run.end + 1 - start,
                values: &internal_run.values,
            }
        })
    }
}

impl<T: Clone> HrleVec<T> {
    /// Construct a `Vec<T>` from this `HrleVec`.
    ///
    /// The values of the `HrleVec` are cloned to produce the final `Vec`.
    /// This can be usefull for debugging.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let slice = &[0, 0, 0, 1, 1, 99, 9];
    /// let hrle = HrleVec::from(&slice[..]);
    /// let vec = hrle.to_vec();
    ///
    /// assert_eq!(vec.as_slice(), slice);
    /// ```
    pub fn to_vec(&self) -> Vec<T> {
        self.iter().cloned().collect()
    }

    /// Pushes an unencoded value to the back of this hrle_vec.
    ///
    /// # Note
    ///
    /// This is useful if you want to push many values efficiently.  Until you
    /// call `encode`, the values are stored in an unencoded run.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// hrle.push_unencoded(1);
    /// assert_eq!(hrle[0], 1);
    /// ```
    pub fn push_unencoded(&mut self, value: T) {
        self.push_n_unencoded(1, value);
    }

    /// Pushes unencoded values to the back of this hrle_vec.
    ///
    /// # Note
    ///
    /// This is useful if you want to push many values efficiently.  Until you
    /// call `encode`, the values are stored in an unencoded run.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// hrle.push_n_unencoded(10, 1);
    /// assert_eq!(hrle[9], 1);
    /// ```
    pub fn push_n_unencoded(&mut self, count: usize, value: T) {
        self.runs.push(InternalRun {
            end: self.len() + count - 1,
            repeat: 1,
            values: vec![value; count],
        });
    }
}

impl<T: Eq + Clone + Hash> HrleVec<T> {
    /// Appends an element to the back of this [`HrleVec`].
    ///
    /// # Note
    ///
    /// This method is expensive because it creates a new `HrleVec` from scratch
    /// every call.  If you need to push many elements, it is better to use
    /// `push_unencoded` or do the following workaround:
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// let new_elements = vec![1, 1, 2, 2, 1, 1, 2, 2];
    /// hrle = HrleVec::from_iter(hrle.to_vec().into_iter().chain(new_elements));
    /// ```
    ///
    /// This reduces the number of hierarchal run-length encoding/decoding
    /// operations.
    ///
    /// # Panics
    ///
    /// Panics if the number of elements in the vector overflows a usize.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// hrle.push(1);
    /// assert_eq!(hrle[0], 1);
    /// ```
    pub fn push(&mut self, value: T) {
        self.push_n(1, value);
    }

    /// Appends the same element n times to the back of this hrle_vec.
    ///
    /// # Note
    ///
    /// This method is expensive because it creates a new `HrleVec` from scratch
    /// every call.  If you need to push many elements, it is better to use
    /// `push_n_unencoded` or do the following workaround:
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// let new_elements = vec![1, 1, 2, 2, 1, 1, 2, 2];
    /// hrle = HrleVec::from_iter(hrle.to_vec().into_iter().chain(new_elements));
    /// ```
    ///
    /// This reduces the number of hierarchal run-length encoding/decoding
    /// operations.
    ///
    /// # Panics
    ///
    /// Panics if the number of elements in the vector overflows a usize.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    ///
    /// // Push 10 times a 2
    /// hrle.push_n(10, 2);
    /// assert_eq!(hrle[9], 2);
    ///
    /// // Push 2 times a 3
    /// hrle.push_n(2, 3);
    /// assert_eq!(hrle[10], 3);
    /// assert_eq!(hrle.len(), 12);
    /// assert_eq!(hrle.runs_len(), 2);
    /// ```
    pub fn push_n(&mut self, count: usize, value: T) {
        if count == 0 {
            return;
        }

        match self.runs.last_mut() {
            None => {
                self.runs.push(InternalRun {
                    end: count - 1,
                    repeat: count,
                    values: vec![value; count],
                });
            }
            Some(run) if run.values.len() == 1 && run.values[0] == value => {
                run.end += count;
                run.repeat += count;
            }
            Some(_) => {
                *self = HrleVec::from_iter(
                    self.to_vec()
                        .into_iter()
                        .chain(std::iter::repeat(value).take(count)),
                );
            }
        };
    }

    /// Modify the value at given index.
    ///
    /// # Note
    ///
    /// This method is expensive because it creates a new `HrleVec` from scratch
    /// every call.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::from(&[1, 2, 1, 1][..]);
    ///
    /// assert_eq!(hrle[3], 1);
    /// assert_eq!(hrle.len(), 4);
    /// assert_eq!(hrle.runs_len(), 3);
    ///
    /// hrle.set(3, 2);
    /// assert_eq!(hrle[3], 2);
    /// assert_eq!(hrle.len(), 4);
    /// assert_eq!(hrle.runs_len(), 1);
    /// ```
    pub fn set(&mut self, index: usize, value: T) {
        let mut vec = self.to_vec();
        vec[index] = value;
        *self = HrleVec::from_iter(vec);
    }

    /// Modify the value at given range.
    ///
    /// # Note
    ///
    /// This method is expensive because it creates a new `HrleVec` from scratch
    /// every call.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::from(&[1, 2, 2, 1][..]);
    ///
    /// assert_eq!(hrle[1], 2);
    /// assert_eq!(hrle[2], 2);
    /// assert_eq!(hrle.len(), 4);
    /// assert_eq!(hrle.runs_len(), 3);
    ///
    /// hrle.set_range(1..=2, 1);
    /// assert_eq!(hrle[1], 1);
    /// assert_eq!(hrle[2], 1);
    /// assert_eq!(hrle.len(), 4);
    /// assert_eq!(hrle.runs_len(), 1);
    /// ```
    pub fn set_range<I>(&mut self, index: I, value: T)
    where
        I: SliceIndex<[T], Output = [T]>,
    {
        let mut vec = self.to_vec();
        let Some(slice) = vec.get_mut(index) else {
            panic!("Index out of bounds");
        };
        for elem in slice.iter_mut() {
            *elem = value.clone();
        }
        *self = HrleVec::from_iter(vec);
    }

    /// Encodes the hrle_vec.
    ///
    /// This is useful if you have a hrle_vec that has been modified by pushing
    /// elements to the back.
    ///
    /// # Examples
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::from(&[1, 2, 1][..]);
    /// hrle.push_unencoded(2);
    /// hrle.push_n_unencoded(2, 3);
    /// hrle.encode();
    /// assert_eq!(hrle.to_vec(), vec![1, 2, 1, 2, 3, 3]);
    /// ```
    pub fn encode(&mut self) {
        *self = HrleVec::from_iter(self.to_vec());
    }
}

impl<T> InternalRun<T> {
    /// Returns the length of the run value.
    ///
    /// # Examples
    ///
    /// ```
    /// # use hrle_vec::{HrleVec, Run};
    /// let mut hrle = HrleVec::from(&[1, 2, 3, 2, 3][..]);
    /// assert_eq!(
    ///     hrle.get_run(0),
    ///     Some(Run {
    ///         start: 0,
    ///         len: 1,
    ///         values: &vec![1]
    ///     })
    /// );
    /// assert_eq!(
    ///     hrle.get_run(1),
    ///     Some(Run {
    ///         start: 1,
    ///         len: 4,
    ///         values: &vec![2, 3]
    ///     })
    /// );
    /// assert_eq!(hrle.get_run(0).unwrap().len, 1);
    /// assert_eq!(hrle.get_run(1).unwrap().len, 4);
    ///
    /// for _ in 0..10 {
    ///     hrle.push_unencoded(2);
    ///     hrle.push_unencoded(3);
    /// }
    /// hrle.encode();
    ///
    /// assert_eq!(hrle.runs_len(), 2);
    /// assert_eq!(hrle.get_run(1).unwrap().len, 24);
    /// ```
    pub fn len(&self) -> NonZeroUsize {
        NonZeroUsize::new(self.repeat * self.values.len()).unwrap()
    }
}
