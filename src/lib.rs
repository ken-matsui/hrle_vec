mod display;
mod impls;
mod iter;
mod parse;

use std::num::NonZeroUsize;

use nonzero::nonzero as nz;

#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct HrleVec<T> {
    runs: Vec<Run<T>>,
}

#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct Run<T> {
    end: usize,
    value: RunValue<T>,
}

#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub enum RunValue<T> {
    One { value: T },
    Group { count: usize, values: HrleVec<T> },
}

impl<T> HrleVec<T> {
    /// Constructs a new empty `HrleVec<T>`.
    ///
    /// The `HrleVec` will not allocate until elements are pushed onto it.
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
    /// let hrle = HrleVec::<i32>::with_capacity(10);
    ///
    /// // The hrle_vector contains no items, even though it has capacity for more
    /// assert_eq!(hrle.len(), 0);
    /// ```
    pub fn with_capacity(capacity: usize) -> Self {
        Self {
            runs: Vec::with_capacity(capacity),
        }
    }

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

    /// Returns an iterator that can be used to iterate over the runs.
    pub fn runs_iter(&self) -> std::slice::Iter<Run<T>> {
        self.runs.iter()
    }

    pub fn iter(&self) -> iter::Iter<T> {
        iter::Iter {
            hrle: self,
            index: 0,
        }
    }

    pub fn runs_len(&self) -> usize {
        self.runs.len()
    }

    pub fn len(&self) -> usize {
        match self.runs.last() {
            Some(run) => usize::try_from(run.end).unwrap() + 1,
            None => 0,
        }
    }

    pub fn last_run(&self) -> Option<&Run<T>> {
        self.runs.last()
    }

    pub fn last(&self) -> Option<&T> {
        match self.runs.last() {
            Some(Run {
                value: RunValue::One { value, .. },
                ..
            }) => Some(value),
            Some(Run {
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
}

impl<T: Clone> HrleVec<T> {
    pub fn to_vec(&self) -> Vec<T> {
        self.iter().cloned().collect()
    }
}

impl<T> Run<T> {
    pub fn len(&self) -> NonZeroUsize {
        self.value.len()
    }
}

impl<T> RunValue<T> {
    pub fn len(&self) -> NonZeroUsize {
        match self {
            RunValue::One { .. } => nz!(1_usize),
            RunValue::Group { count, values, .. } => {
                NonZeroUsize::new(count * values.runs_iter().map(|r| r.len().get()).sum::<usize>())
                    .unwrap()
            }
        }
    }
}
