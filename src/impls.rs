use std::ops::Index;

use crate::parse::encode;
use crate::{HrleVec, RunValue};

impl<T: Clone> Into<Vec<T>> for HrleVec<T> {
    fn into(self) -> Vec<T> {
        self.to_vec()
    }
}

impl<'a, T: Clone + Eq> From<&'a [T]> for HrleVec<T> {
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
        match &run.value {
            RunValue::One { value, .. } => value,
            RunValue::Group { values, .. } if index < self.len() => {
                &values[(index - self.run_start(ri)) % values.len()]
            }
            _ => panic!(
                "index out of bounds: the len is {} but the index is {}",
                self.len(),
                index
            ),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_from_slice_into_vec() {
        let input = "ABCBCABCBCDEEF".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        assert_eq!(format!("{}", encoded), "(2A(2BC))D(2E)F");
        let decoded: Vec<char> = encoded.into();
        assert_eq!(input, decoded);

        let input = "ABBABBABBABA".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        assert_eq!(format!("{}", encoded), "(3A(2B))ABA");
        let decoded: Vec<char> = encoded.into();
        assert_eq!(input, decoded);

        let input = "ABCDABCDCDCDCD".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        assert_eq!(format!("{}", encoded), "(2ABCD)(3CD)");
        let decoded: Vec<char> = encoded.into();
        assert_eq!(input, decoded);

        let input = "ABABABABAB".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        assert_eq!(format!("{}", encoded), "(5AB)");
        let decoded: Vec<char> = encoded.into();
        assert_eq!(input, decoded);
    }
}
