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
        return RunValue::Repeat {
            n: repeat,
            values: repeated_seq.to_vec(),
        };
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
            encoded,
            HrleVec {
                runs: vec![
                    InternalRun {
                        end: 9,
                        value: RunValue::Repeat {
                            n: 2,
                            values: vec!['A', 'B', 'C', 'B', 'C']
                        }
                    },
                    InternalRun {
                        end: 10,
                        value: RunValue::One { value: 'D' }
                    },
                    InternalRun {
                        end: 12,
                        value: RunValue::Repeat {
                            n: 2,
                            values: vec!['E']
                        }
                    },
                    InternalRun {
                        end: 13,
                        value: RunValue::One { value: 'F' }
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
                        value: RunValue::Repeat {
                            n: 3,
                            values: vec!['A', 'B', 'B']
                        }
                    },
                    InternalRun {
                        end: 9,
                        value: RunValue::One { value: 'A' }
                    },
                    InternalRun {
                        end: 10,
                        value: RunValue::One { value: 'B' }
                    },
                    InternalRun {
                        end: 11,
                        value: RunValue::One { value: 'A' }
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
                        value: RunValue::Repeat {
                            n: 2,
                            values: vec!['A', 'B', 'C', 'D']
                        }
                    },
                    InternalRun {
                        end: 13,
                        value: RunValue::Repeat {
                            n: 3,
                            values: vec!['C', 'D']
                        }
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
                    value: RunValue::Repeat {
                        n: 5,
                        values: vec!['A', 'B']
                    }
                }]
            }
        );
    }
}
