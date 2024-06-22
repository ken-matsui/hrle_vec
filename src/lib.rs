mod display;
mod impls;
mod iter;
mod parse;

use std::num::NonZeroUsize;

use itertools::repeat_n;

#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct HrleVec<T> {
    runs: Vec<InternalRun<T>>,
}

/// Represent a run inside the `HrleVec`, can be obtained from the [`runs`](struct.HrleVec.html#method.runs). A run is a serie of the same value.
///
/// # Example
///
/// ```
/// # use hrle_vec::{HrleVec, Run, RunValue};
/// let hrle = HrleVec::from(&[1, 2, 3, 1, 2, 3, 3][..]);
///
/// let mut iterator = hrle.runs_iter();
/// assert_eq!(
///     iterator.next(),
///     Some(Run {
///         len: 6,
///         value: RunValue::Group {
///             count: 2,
///             values: HrleVec::from(&[&1, &2, &3][..])
///         }
///     })
/// );
/// assert_eq!(
///     iterator.next(),
///     Some(Run {
///         len: 1,
///         value: RunValue::One {
///             value: &3
///         }
///     })
/// );
/// assert_eq!(iterator.next(), None);
/// ```
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct Run<T> {
    /// The length of this run.
    pub len: usize,
    /// The value of this run.
    pub value: RunValue<T>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub(crate) struct InternalRun<T> {
    /// The end index of this run.
    ///
    /// NOTE: This is correctly calculated only for the first depth of runs.
    /// For runs inside groups, this value is not used.
    end: usize,
    /// The value of this run.
    value: RunValue<T>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub enum RunValue<T> {
    One { value: T },
    Group { count: usize, values: HrleVec<T> },
}

impl<T> HrleVec<T> {
    /// Constructs a new empty `HrleVec<T>`.
    ///
    /// The hrle_vector will not allocate until elements are pushed onto it.
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

    /// Constructs a new empty `HrleVec<T>` with capacity for the number of runs.
    ///
    /// Choosing this value requires knowledge about the composition of the data that is going to be inserted.
    ///
    /// # Example
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::<i32>::with_capacity(10);
    ///
    /// // The hrle_vector contains no items, even though it has capacity for more
    /// assert_eq!(hrle.len(), 0);
    ///
    /// // These are all done without reallocating...
    /// for i in 0..10 {
    ///    hrle.push(i);
    /// }
    ///
    /// // The hrle_vector contains 10 runs and 10 elements too...
    /// assert_eq!(hrle.len(), 10);
    /// assert_eq!(hrle.runs_len(), 10);
    ///
    /// // this definitely won't reallocate the runs
    /// hrle.push(10);
    /// // while this may make the hrle_vector reallocate
    /// hrle.push(11);
    /// ```
    pub fn with_capacity(capacity: usize) -> Self {
        Self {
            runs: Vec::with_capacity(capacity),
        }
    }

    /// Returns `true` if the hrle_vector contains no elements.
    ///
    /// # Example
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// assert!(hrle.is_empty());
    ///
    /// hrle.push(1);
    /// assert!(!hrle.is_empty());
    /// ```
    pub fn is_empty(&self) -> bool {
        self.runs.is_empty()
    }

    /// Clears the vector, removing all values.
    ///
    /// Note that this method has no effect on the allocated capacity of the vector.
    ///
    /// # Examples
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

    pub(crate) fn internal_runs_iter(&self) -> std::slice::Iter<InternalRun<T>> {
        self.runs.iter()
    }

    /// Returns an iterator that can be used to iterate over the runs.
    ///
    /// # Example
    ///
    /// ```
    /// # use hrle_vec::{HrleVec, Run, RunValue};
    /// let hrle = HrleVec::from(&[1, 2, 3, 1, 2, 3, 3][..]);
    ///
    /// let mut iterator = hrle.runs_iter();
    /// assert_eq!(
    ///     iterator.next(),
    ///     Some(Run {
    ///         len: 6,
    ///         value: RunValue::Group {
    ///             count: 2,
    ///             values: HrleVec::from(&[&1, &2, &3][..])
    ///         }
    ///     })
    /// );
    /// assert_eq!(
    ///     iterator.next(),
    ///     Some(Run {
    ///         len: 1,
    ///         value: RunValue::One {
    ///             value: &3
    ///         }
    ///     })
    /// );
    /// assert_eq!(iterator.next(), None);
    /// ```
    pub fn runs_iter(&self) -> iter::Runs<T> {
        iter::Runs {
            hrle: self,
            run_index: 0,
        }
    }

    /// Returns an iterator over values. Comparable to a `Vec` iterator.
    ///
    /// # Example
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// hrle.push(1);
    /// hrle.push(1);
    /// hrle.push(2);
    /// hrle.push(3);
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
        }
    }

    /// Returns the number of runs
    ///
    /// # Example
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// assert_eq!(hrle.runs_len(), 0);
    ///
    /// hrle.push(1);
    /// hrle.push(1);
    /// assert_eq!(hrle.runs_len(), 1);
    ///
    /// hrle.push(2);
    /// hrle.push(3);
    /// assert_eq!(hrle.runs_len(), 3);
    /// ```
    pub fn runs_len(&self) -> usize {
        self.runs.len()
    }

    /// Returns the number of elements in the hrle_vector.
    ///
    /// # Example
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// hrle.push(1);
    /// hrle.push(1);
    /// hrle.push(2);
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
    /// # Example
    /// ```
    /// # use hrle_vec::{HrleVec, Run, RunValue};
    /// let mut hrle = HrleVec::new();
    ///
    /// assert_eq!(hrle.last_run(), None);
    ///
    /// hrle.push(1);
    /// hrle.push(1);
    /// hrle.push(1);
    /// hrle.push(1);
    ///
    /// assert_eq!(
    ///     hrle.last_run(),
    ///     Some(Run {
    ///         len: 4,
    ///         value: RunValue::Group {
    ///             count: 4,
    ///             values: HrleVec::from(&[&1][..])
    ///         }
    ///     })
    /// );
    ///
    /// hrle.push(2);
    /// hrle.push(2);
    /// hrle.push(3);
    ///
    /// assert_eq!(
    ///     hrle.last_run(),
    ///     Some(Run {
    ///         len: 1,
    ///         value: RunValue::One {
    ///             value: &3
    ///         }
    ///     })
    /// );
    /// ```
    pub fn last_run(&self) -> Option<Run<&T>> {
        let prev_end = if self.runs.len() >= 2 {
            self.runs[self.runs.len() - 2].end + 1
        } else {
            0
        };

        self.runs.last().map(|run| Run {
            len: run.end + 1 - prev_end,
            value: run.value.as_ref(),
        })
    }

    /// Returns the last value, or None if it is empty.
    ///
    /// # Example
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let hrle = HrleVec::from(&[10, 10, 40, 40, 30][..]);
    /// assert_eq!(hrle.last(), Some(&30));
    ///
    /// let hrle = HrleVec::<i32>::new();
    /// assert_eq!(hrle.last(), None);
    /// ```
    pub fn last(&self) -> Option<&T> {
        match self.runs.last() {
            Some(InternalRun {
                value: RunValue::One { value, .. },
                ..
            }) => Some(value),
            Some(InternalRun {
                value: RunValue::Group { values, .. },
                ..
            }) => values.last(),
            None => None,
        }
    }

    /// Returns the index of the run containing the value with the given index.
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
    pub fn run_start(&self, run_index: usize) -> usize {
        let mut start = 0;
        for run in &self.runs[..run_index] {
            start += run.len().get();
        }
        start
    }

    pub fn as_ref(&self) -> HrleVec<&T> {
        HrleVec {
            runs: self
                .runs
                .iter()
                .map(|run| InternalRun {
                    end: run.end,
                    value: run.value.as_ref(),
                })
                .collect(),
        }
    }

    /// Returns the run at the given index, or None if it does not exist.
    ///
    /// # Example
    ///
    /// ```
    /// # use hrle_vec::{HrleVec, Run, RunValue};
    /// let hrle = HrleVec::from(&[1, 2, 3, 1, 2, 3, 3][..]);
    ///
    /// assert_eq!(
    ///     hrle.get_run(1),
    ///     Some(Run {
    ///         len: 1,
    ///         value: RunValue::One {
    ///             value: &3
    ///         }
    ///     })
    /// );
    /// assert_eq!(hrle.get_run(2), None);
    /// ```
    pub fn get_run(&self, run_index: usize) -> Option<Run<&T>> {
        self.runs.get(run_index).map(|internal_run| Run {
            len: internal_run.end + 1 - self.run_start(run_index),
            value: internal_run.value.as_ref(),
        })
    }
}

impl<T: Clone> HrleVec<T> {
    /// Construct a `Vec<T>` from this `HrleVec`.
    ///
    /// The values of the `HrleVec` are cloned to produce the final `Vec`.
    /// This can be usefull for debugging.
    ///
    /// # Example
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
}

impl<T: Eq + Clone> HrleVec<T> {
    /// Appends an element to the back of this hrle_vector.
    ///
    /// # Note
    /// This method is expensive because it creates a new `HrleVec` from scratch
    /// every call.  If you need to push many elements, it is better to do the
    /// following:
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// let new_elements = vec![1, 1, 2, 2, 1, 1, 2, 2];
    /// hrle = HrleVec::from_iter(hrle.to_vec().into_iter().chain(new_elements.into_iter()));
    /// ```
    ///
    /// This reduces the number of hierarchal run-length encoding/decoding
    /// operations.
    ///
    /// # Panics
    /// Panics if the number of elements in the vector overflows a usize.
    ///
    /// # Example
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
    /// This method is expensive because it creates a new `HrleVec` from scratch
    /// every call.  If you need to push many elements, it is better to do the
    /// following:
    ///
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    /// let new_elements = vec![1, 1, 2, 2, 1, 1, 2, 2];
    /// hrle = HrleVec::from_iter(hrle.to_vec().into_iter().chain(new_elements.into_iter()));
    /// ```
    ///
    /// This reduces the number of hierarchal run-length encoding/decoding
    /// operations.
    ///
    /// # Panics
    /// Panics if the number of elements in the vector overflows a usize.
    ///
    /// # Example
    /// ```
    /// # use hrle_vec::HrleVec;
    /// let mut hrle = HrleVec::new();
    ///
    /// // Push 10 times a 2
    /// hrle.push_n(10, 2);
    /// assert_eq!(hrle[9], 2);
    /// ```
    pub fn push_n(&mut self, count: usize, value: T) {
        if count == 0 {
            return;
        }
        *self = HrleVec::from_iter(self.to_vec().into_iter().chain(repeat_n(value, count)))
    }
}

impl<T> InternalRun<T> {
    pub fn len(&self) -> NonZeroUsize {
        self.value.len()
    }
}

impl<T> RunValue<T> {
    pub fn len(&self) -> NonZeroUsize {
        match self {
            RunValue::One { .. } => unsafe { NonZeroUsize::new_unchecked(1) },
            RunValue::Group { count, values, .. } => {
                NonZeroUsize::new(count * values.runs_iter().map(|r| r.len).sum::<usize>()).unwrap()
            }
        }
    }

    pub fn as_ref(&self) -> RunValue<&T> {
        match self {
            RunValue::One { value, .. } => RunValue::One { value },
            RunValue::Group { count, values, .. } => RunValue::Group {
                count: *count,
                values: values.as_ref(),
            },
        }
    }
}
