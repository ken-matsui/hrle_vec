use std::hash::Hash;

use itertools::Itertools;

use crate::{HrleVec, InternalRun};

pub(crate) fn encode<T: Clone + Eq + Hash>(v: &[T]) -> HrleVec<T> {
    // Case 1: Time Complexity: O(n)
    if v.iter().all_equal() {
        return HrleVec {
            runs: vec![InternalRun {
                end: v.len() - 1,
                repeat: v.len(),
                values: vec![v[0].clone()],
            }],
        };
    }

    // Case 2: Time Complexity: O(n)
    if v.iter().all_unique() {
        return HrleVec {
            runs: v
                .iter()
                .enumerate()
                .map(|(i, x)| InternalRun {
                    end: i,
                    repeat: 1,
                    values: vec![x.clone()],
                })
                .collect(),
        };
    }

    // Case 3: Time Complexity: O(n^2)
    let mut index = 0;
    let mut runs = Vec::new();

    while index < v.len() {
        let (repeat, best_run) = find_best_run(v, index);
        index += repeat * best_run.len();
        runs.push(InternalRun {
            end: index - 1,
            repeat,
            values: best_run,
        });
    }

    HrleVec { runs }
}

fn find_best_run<T: Clone + Eq>(v: &[T], start: usize) -> (usize, Vec<T>) {
    let mut seq_length = 1;

    // Time Complexity: O(n/2) => O(n)
    while start + seq_length * 2 <= v.len() {
        if v[start..start + seq_length] != v[start + seq_length..start + 2 * seq_length] {
            seq_length += 1;
            continue;
        }

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
        return (repeat, repeated_seq.to_vec());
    }

    (1, vec![v[start].clone()])
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_encode() {
        let input = vec![0; 10_000];
        let encoded = encode(&input);
        assert_eq!(
            encoded,
            HrleVec {
                runs: vec![InternalRun {
                    end: 9999,
                    repeat: 10_000,
                    values: vec![0],
                }]
            }
        );

        let input = Vec::from_iter(0..3);
        let encoded = encode(&input);
        assert_eq!(
            encoded,
            HrleVec {
                runs: vec![
                    InternalRun {
                        end: 0,
                        repeat: 1,
                        values: vec![0],
                    },
                    InternalRun {
                        end: 1,
                        repeat: 1,
                        values: vec![1],
                    },
                    InternalRun {
                        end: 2,
                        repeat: 1,
                        values: vec![2],
                    },
                ]
            }
        );

        let input = "ABCBCABCBCDEEF".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded,
            HrleVec {
                runs: vec![
                    InternalRun {
                        end: 9,
                        repeat: 2,
                        values: vec!['A', 'B', 'C', 'B', 'C'],
                    },
                    InternalRun {
                        end: 10,
                        repeat: 1,
                        values: vec!['D'],
                    },
                    InternalRun {
                        end: 12,
                        repeat: 2,
                        values: vec!['E'],
                    },
                    InternalRun {
                        end: 13,
                        repeat: 1,
                        values: vec!['F'],
                    }
                ]
            }
        );

        let input = "ABBABBABBABA".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded,
            HrleVec {
                runs: vec![
                    InternalRun {
                        end: 8,
                        repeat: 3,
                        values: vec!['A', 'B', 'B'],
                    },
                    InternalRun {
                        end: 9,
                        repeat: 1,
                        values: vec!['A'],
                    },
                    InternalRun {
                        end: 10,
                        repeat: 1,
                        values: vec!['B'],
                    },
                    InternalRun {
                        end: 11,
                        repeat: 1,
                        values: vec!['A'],
                    }
                ]
            }
        );

        let input = "ABCDABCDCDCDCD".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded,
            HrleVec {
                runs: vec![
                    InternalRun {
                        end: 7,
                        repeat: 2,
                        values: vec!['A', 'B', 'C', 'D'],
                    },
                    InternalRun {
                        end: 13,
                        repeat: 3,
                        values: vec!['C', 'D'],
                    }
                ]
            }
        );

        let input = "ABABABABAB".chars().collect::<Vec<char>>();
        let encoded = encode(&input);
        assert_eq!(
            encoded,
            HrleVec {
                runs: vec![InternalRun {
                    end: 9,
                    repeat: 5,
                    values: vec!['A', 'B'],
                }]
            }
        );
    }
}
