use crate::RunValue;

pub(crate) fn encode<T: Clone + Eq>(v: &[T]) -> Vec<RunValue<T>> {
    let mut idx = 0;
    let mut result = Vec::new();
    while idx < v.len() {
        let best_run = find_best_run(v, idx);
        idx += best_run.len().get();
        result.push(best_run);
    }
    result
}

fn find_best_run<T: Clone + Eq>(v: &[T], start: usize) -> RunValue<T> {
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
            return RunValue::Group {
                count,
                values: encode(repeated_seq),
            };
        }
        seq_length += 1;
    }
    RunValue::One {
        value: v[start].clone(),
    }
}

pub(crate) fn decode<T: Clone>(r: &[RunValue<T>]) -> Vec<T> {
    r.iter().flat_map(|run| run.decode()).collect()
}

impl<T: Clone> RunValue<T> {
    pub fn decode(&self) -> Vec<T> {
        match self {
            RunValue::One { value } => vec![value.clone()],
            RunValue::Group { count, values } => values
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
