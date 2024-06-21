use crate::parse::encode;
use crate::HrleVec;

impl<T: Clone> Into<Vec<T>> for HrleVec<T> {
    fn into(self) -> Vec<T> {
        self.to_vec()
    }
}

impl<'a, T: Clone + Eq> From<&'a [T]> for HrleVec<T> {
    fn from(slice: &'a [T]) -> Self {
        HrleVec {
            runs: encode(slice),
        }
    }
}

impl<T: Default> Default for HrleVec<T> {
    fn default() -> Self {
        Self::new()
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
        assert_eq!(decoded, input);

        let input = "ABBABBABBABA".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        assert_eq!(format!("{}", encoded), "(3A(2B))ABA");
        let decoded: Vec<char> = encoded.into();
        assert_eq!(decoded, input);

        let input = "ABCDABCDCDCDCD".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        assert_eq!(format!("{}", encoded), "(2ABCD)(3CD)");
        let decoded: Vec<char> = encoded.into();
        assert_eq!(decoded, input);

        let input = "ABABABABAB".chars().collect::<Vec<char>>();
        let encoded = HrleVec::from(&input[..]);
        assert_eq!(format!("{}", encoded), "(5AB)");
        let decoded: Vec<char> = encoded.into();
        assert_eq!(decoded, input);
    }
}
