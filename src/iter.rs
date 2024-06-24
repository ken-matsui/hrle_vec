use std::cmp::min;
use std::hash::Hash;

use crate::{HrleVec, RunRef};

/// Immutable `HrleVec` iterator over references of values.
///
/// Can be obtained from the [`iter`](struct.HrleVec.html#method.iter).
///
/// # Examples
///
/// ```
/// # use hrle_vec::HrleVec;
/// let hrle = HrleVec::from(&[1, 1, 1, 1, 2, 2, 3][..]);
///
/// let mut iterator = hrle.iter();
/// assert_eq!(iterator.next(), Some(&1));
/// assert_eq!(iterator.next(), Some(&1));
/// assert_eq!(iterator.next(), Some(&1));
/// assert_eq!(iterator.next(), Some(&1));
/// assert_eq!(iterator.next(), Some(&2));
/// assert_eq!(iterator.next(), Some(&2));
/// assert_eq!(iterator.next(), Some(&3));
/// assert_eq!(iterator.next(), None);
/// ```
pub struct Iter<'a, T: 'a> {
    pub(crate) hrle: &'a HrleVec<T>,
    pub(crate) index: usize,
    pub(crate) run_index: usize,
    pub(crate) index_back: usize,
    pub(crate) run_index_back: usize,
}

impl<'a, T: 'a> Iterator for Iter<'a, T> {
    type Item = &'a T;

    // Time Complexity: O(1)
    fn next(&mut self) -> Option<Self::Item> {
        if self.index == self.index_back {
            return None;
        }

        let run = &self.hrle.runs[self.run_index];
        let value = &run[self.index - self.hrle.run_start(self.run_index)];

        self.index += 1;
        if self.index > run.end {
            self.run_index += 1;
        }

        Some(value)
    }

    // Time Complexity: O(1)
    fn size_hint(&self) -> (usize, Option<usize>) {
        let len = self.hrle.len() - self.index;
        (len, Some(len))
    }

    // Time Complexity: O(1)
    fn count(self) -> usize {
        self.len() // from ExactSizeIterator impl
    }

    // Time Complexity: O(1)
    fn last(self) -> Option<Self::Item> {
        if self.index == self.hrle.len() {
            return None;
        }
        self.hrle.last()
    }

    // Time Complexity: O(log n)
    fn nth(&mut self, n: usize) -> Option<Self::Item> {
        self.index = min(self.index + n, self.hrle.len());
        self.run_index = if self.index < self.hrle.len() {
            self.hrle.run_index(self.index)
        } else {
            self.hrle.runs.len() - 1
        };
        self.next()
    }
}

impl<'a, T: 'a> ExactSizeIterator for Iter<'a, T> {}

impl<'a, T: 'a> DoubleEndedIterator for Iter<'a, T> {
    // Time Complexity: O(1)
    fn next_back(&mut self) -> Option<Self::Item> {
        if self.hrle.len() == self.index {
            return None;
        }

        self.index_back -= 1;
        if self.run_index_back > 0 && self.index_back <= self.hrle.runs[self.run_index_back - 1].end
        {
            self.run_index_back -= 1;
        }

        let run = &self.hrle.runs[self.run_index_back];
        Some(&run[self.index_back - self.hrle.run_start(self.run_index_back)])
    }
}

impl<T: Eq + Clone + Hash + Send + Sync> FromIterator<T> for HrleVec<T> {
    fn from_iter<I: IntoIterator<Item = T>>(iter: I) -> Self {
        let mut hrle = HrleVec::new();
        hrle.extend(iter);
        hrle
    }
}

/// Immutable `HrleVec` iterator over runs.
///
/// Can be obtained from the [`runs`](struct.HrleVec.html#method.runs) method.
/// Because internally runs are stored using the end values a new Run is
/// allocated in each iteration.
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
///         values: &vec![1, 2, 3]
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
pub struct Runs<'a, T: 'a> {
    pub(crate) hrle: &'a HrleVec<T>,
    pub(crate) run_index: usize,
}

impl<'a, T: 'a> Iterator for Runs<'a, T> {
    type Item = RunRef<'a, T>;

    fn next(&mut self) -> Option<Self::Item> {
        if self.run_index == self.hrle.runs.len() {
            return None;
        }
        let run = &self.hrle.runs[self.run_index];
        let start = self.hrle.run_start(self.run_index);
        self.run_index += 1;
        Some(RunRef {
            start,
            len: run.len().get(),
            values: &run.values,
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        let len = self.hrle.runs.len() - self.run_index;
        (len, Some(len))
    }

    fn count(self) -> usize {
        self.len() // from ExactSizeIterator impl
    }

    fn last(self) -> Option<Self::Item> {
        if self.run_index == self.hrle.runs.len() {
            return None;
        }
        self.hrle.last_run()
    }

    fn nth(&mut self, n: usize) -> Option<Self::Item> {
        self.run_index = min(self.run_index + n, self.hrle.runs.len());
        self.next()
    }
}

impl<'a, T: 'a> ExactSizeIterator for Runs<'a, T> {}
