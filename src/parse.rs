use crate::Run;

pub(crate) fn encode<T: Clone + Eq>(v: &[T]) -> Vec<Run<T>> {
    let mut idx = 0;
    let mut result = Vec::new();
    while idx < v.len() {
        let best_run = find_best_run(v, idx);
        if best_run.len() < 1 {
            panic!("Invalid run length");
        }
        idx += best_run.len();
        result.push(best_run);
    }
    result
}

fn find_best_run<T: Clone + Eq>(v: &[T], start: usize) -> Run<T> {
    let mut seq_length = 1;
    while start + seq_length * 2 <= v.len() {
        if v[start..start + seq_length] == v[start + seq_length..start + 2 * seq_length] {
            // There are at least 2 repeats of the sequence.
            let mut count = 2;
            while start + seq_length * (count + 1) <= v.len()
                && v[start..start + seq_length]
                    == v[start + seq_length * count..start + seq_length * (count + 1)]
            {
                // Count additional repeats of the sequence.
                count += 1;
            }

            let repeated_seq = &v[start..start + seq_length];
            return Run::Group {
                count,
                values: encode(repeated_seq),
            };
        }
        seq_length += 1;
    }
    Run::One(v[start].clone())
}

pub(crate) fn decode<T: Clone>(r: &[Run<T>]) -> Vec<T> {
    r.iter().flat_map(|run| run.decode()).collect()
}

impl<T: Clone> Run<T> {
    pub fn decode(&self) -> Vec<T> {
        match self {
            Run::One(v) => vec![v.clone()],
            Run::Group { count, values } => values
                .iter()
                .map(|r| r.decode())
                .cycle()
                .take(count * values.len())
                .flatten()
                .collect(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_encode_decode() {
        let input = "ABCBCABCBCDEEF".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded
                .iter()
                .fold(String::new(), |acc, r| format!("{}{}", acc, r)),
            "(2A(2BC))D(2E)F"
        );
        let decoded = decode(&encoded);
        assert_eq!(decoded, input);

        let input = "ABBABBABBABA".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded
                .iter()
                .fold(String::new(), |acc, r| format!("{}{}", acc, r)),
            "(3A(2B))ABA"
        );
        let decoded = decode(&encoded);
        assert_eq!(decoded, input);

        let input = "ABCDABCDCDCDCD".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded
                .iter()
                .fold(String::new(), |acc, r| format!("{}{}", acc, r)),
            "(2ABCD)(3CD)"
        );
        let decoded = decode(&encoded);
        assert_eq!(decoded, input);

        let input = "ABABABABAB".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded
                .iter()
                .fold(String::new(), |acc, r| format!("{}{}", acc, r)),
            "(5AB)"
        );
        let decoded = decode(&encoded);
        assert_eq!(decoded, input);
    }
}
