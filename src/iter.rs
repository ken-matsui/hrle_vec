use crate::HrleVec;

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
    pub(crate) index: usize,
}

impl<'a, T: 'a> Iterator for Iter<'a, T> {
    type Item = &'a T;

    fn next(&mut self) -> Option<Self::Item> {
        if self.index == self.hrle.len() {
            return None;
        }
        let value = &self.hrle[self.index];
        self.index += 1;
        Some(value)
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        let len = self.hrle.len() - self.index;
        (len, Some(len))
    }

    fn count(self) -> usize {
        self.len() // from ExactSizeIterator impl
    }

    fn last(self) -> Option<Self::Item> {
        if self.index == self.hrle.len() {
            return None;
        }
        self.hrle.last()
    }

    fn nth(&mut self, n: usize) -> Option<Self::Item> {
        if n + self.index >= self.hrle.len() {
            return None;
        }
        let value = &self.hrle[self.index + n];
        self.index += n;
        Some(value)
    }
}

impl<'a, T: 'a> ExactSizeIterator for Iter<'a, T> {}

impl<'a, T: 'a> DoubleEndedIterator for Iter<'a, T> {
    fn next_back(&mut self) -> Option<Self::Item> {
        if self.hrle.len() == self.index {
            return None;
        }
        let value = &self.hrle[self.index];
        self.index -= 1;
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
