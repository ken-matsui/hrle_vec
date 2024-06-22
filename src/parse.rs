use crate::{HrleVec, InternalRun, RunValue};

pub(crate) fn encode<T: Clone + Eq>(v: &[T]) -> HrleVec<T> {
    let mut index = 0;
    let mut result = Vec::new();
    while index < v.len() {
        let best_run = find_best_run(v, index);
        let end = index + best_run.len().get() - 1;
        index += best_run.len().get();
        result.push(InternalRun {
            end,
            value: best_run,
        });
    }
    HrleVec { runs: result }
}

fn find_best_run<T: Clone + Eq>(v: &[T], start: usize) -> RunValue<T> {
    let mut seq_length = 1;
    while start + seq_length * 2 <= v.len() {
        if v[start..start + seq_length] == v[start + seq_length..start + 2 * seq_length] {
            // There are at least 2 repeats of the sequence.
            let mut repeat = 2;
            while start + seq_length * (repeat + 1) <= v.len()
                && v[start..start + seq_length]
                    == v[start + seq_length * repeat..start + seq_length * (repeat + 1)]
            {
                // Count additional repeats of the sequence.
                repeat += 1;
            }

            let repeated_seq = &v[start..start + seq_length];
            let encoded_seq = encode(repeated_seq);
            return RunValue::Repeat {
                n: repeat,
                values: encoded_seq,
            };
        }
        seq_length += 1;
    }
    RunValue::One {
        value: v[start].clone(),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_encode() {
        let input = "ABCBCABCBCDEEF".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded
                .runs_iter()
                .fold(String::new(), |acc, run| format!("{}{}", acc, run)),
            "(2A(2BC))D(2E)F"
        );

        let input = "ABBABBABBABA".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded
                .runs_iter()
                .fold(String::new(), |acc, r| format!("{}{}", acc, r)),
            "(3A(2B))ABA"
        );

        let input = "ABCDABCDCDCDCD".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded
                .runs_iter()
                .fold(String::new(), |acc, r| format!("{}{}", acc, r)),
            "(2ABCD)(3CD)"
        );

        let input = "ABABABABAB".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded
                .runs_iter()
                .fold(String::new(), |acc, run| format!("{}{}", acc, run)),
            "(5AB)"
        );
    }
}
