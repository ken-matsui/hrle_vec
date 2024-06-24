use std::hash::Hash;
use std::io;
use std::ops::Index;

use crate::parse::encode;
use crate::HrleVec;

#[allow(clippy::from_over_into)]
impl<T: Clone> Into<Vec<T>> for HrleVec<T> {
    fn into(self) -> Vec<T> {
        self.to_vec()
    }
}

impl<'a, T: Clone + Eq + Hash> From<&'a [T]> for HrleVec<T> {
    fn from(slice: &'a [T]) -> Self {
        encode(slice)
    }
}

impl<T: Default> Default for HrleVec<T> {
    fn default() -> Self {
        Self::new()
    }
}

impl<T> Index<usize> for HrleVec<T> {
    type Output = T;

    fn index(&self, index: usize) -> &T {
        let ri = self.run_index(index);
        let run = &self.runs[ri];
        let index_in_run = index - self.run_start(ri);
        if run.repeat == 1 {
            &run.values[index_in_run]
        } else {
            &run.values[index_in_run % run.values.len()]
        }
    }
}

impl<T: Eq + Clone + Hash> Extend<T> for HrleVec<T> {
    fn extend<I: IntoIterator<Item = T>>(&mut self, iter: I) {
        let vec = self.to_vec().into_iter().chain(iter).collect::<Vec<T>>();
        *self = HrleVec::from(&vec[..]);
    }
}

impl io::Write for HrleVec<u8> {
    fn write(&mut self, buf: &[u8]) -> io::Result<usize> {
        self.extend(buf.iter().cloned());
        Ok(buf.len())
    }

    fn write_all(&mut self, buf: &[u8]) -> io::Result<()> {
        self.extend(buf.iter().cloned());
        Ok(())
    }

    fn flush(&mut self) -> io::Result<()> {
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_from_slice_into_vec() {
        let input = "ABCBCABCBCDEEF".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        let decoded: Vec<char> = encoded.into();
        assert_eq!(input, decoded);

        let input = "ABBABBABBABA".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        let decoded: Vec<char> = encoded.into();
        assert_eq!(input, decoded);

        let input = "ABCDABCDCDCDCD".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        let decoded: Vec<char> = encoded.into();
        assert_eq!(input, decoded);

        let input = "ABABABABAB".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        let decoded: Vec<char> = encoded.into();
        assert_eq!(input, decoded);
    }
}
