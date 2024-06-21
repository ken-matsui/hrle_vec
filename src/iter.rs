use std::cmp::min;

use crate::{HrleVec, Run};

/// Immutable `HrleVec` iterator over references of values.
///
/// Can be obtained from the [`iter`](struct.HrleVec.html#method.iter).
///
/// # Example
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
    pub(crate) idx: usize,
}

impl<'a, T: 'a> Iterator for Iter<'a, T> {
    type Item = &'a T;

    fn next(&mut self) -> Option<Self::Item> {
        if self.idx == self.hrle.len() {
            return None;
        }
        let value = &self.hrle[self.idx];
        self.idx += 1;
        Some(value)
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        let len = self.hrle.len() - self.idx;
        (len, Some(len))
    }

    fn count(self) -> usize {
        self.len() // from ExactSizeIterator impl
    }

    fn last(self) -> Option<Self::Item> {
        if self.idx == self.hrle.len() {
            return None;
        }
        self.hrle.last()
    }

    fn nth(&mut self, n: usize) -> Option<Self::Item> {
        self.idx = min(self.idx + n, self.hrle.len());
        self.next()
    }
}

impl<'a, T: 'a> ExactSizeIterator for Iter<'a, T> {}

impl<'a, T: 'a> DoubleEndedIterator for Iter<'a, T> {
    fn next_back(&mut self) -> Option<Self::Item> {
        if self.hrle.len() == self.idx {
            return None;
        }
        let value = &self.hrle[self.idx];
        self.idx -= 1;
        Some(value)
    }
}

impl<T: Eq + Clone> FromIterator<T> for HrleVec<T> {
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
/// # Example
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
pub struct Runs<'a, T: 'a> {
    pub(crate) hrle: &'a HrleVec<T>,
    pub(crate) run_idx: usize,
}

impl<'a, T: 'a> Iterator for Runs<'a, T> {
    type Item = Run<&'a T>;

    fn next(&mut self) -> Option<Self::Item> {
        if self.run_idx == self.hrle.runs.len() {
            return None;
        }
        let run = &self.hrle.runs[self.run_idx];
        self.run_idx += 1;
        Some(Run {
            len: run.len().get(),
            value: run.value.as_ref(),
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        let len = self.hrle.runs.len() - self.run_idx;
        (len, Some(len))
    }

    fn count(self) -> usize {
        self.len() // from ExactSizeIterator impl
    }

    fn last(self) -> Option<Self::Item> {
        if self.run_idx == self.hrle.runs.len() {
            return None;
        }
        self.hrle.last_run()
    }

    fn nth(&mut self, n: usize) -> Option<Self::Item> {
        self.run_idx = min(self.run_idx + n, self.hrle.runs.len());
        self.next()
    }
}

impl<'a, T: 'a> ExactSizeIterator for Runs<'a, T> {}
