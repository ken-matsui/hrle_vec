mod display;
mod impls;
mod parse;

use std::num::NonZeroUsize;

use nonzero::nonzero as nz;

pub struct HrleVec<T> {
    runs: Vec<RunValue<T>>,
}

#[derive(Debug, Clone)]
pub enum RunValue<T> {
    One(T),
    Group {
        count: usize,
        values: Vec<RunValue<T>>,
    },
}

impl<T> HrleVec<T> {
    pub fn new() -> Self {
        Self { runs: vec![] }
    }

    pub fn with_capacity(capacity: usize) -> Self {
        Self {
            runs: Vec::with_capacity(capacity),
        }
    }

    pub fn is_empty(&self) -> bool {
        self.runs.is_empty()
    }

    pub fn clear(&mut self) {
        self.runs.clear();
    }

    pub fn runs_len(&self) -> usize {
        self.runs.len()
    }

    pub fn shrink_to_fit(&mut self) {
        self.runs.shrink_to_fit();
    }
}

impl<T: Clone> HrleVec<T> {
    pub fn to_vec(&self) -> Vec<T> {
        parse::decode(&self.runs)
    }
}

impl<T> RunValue<T> {
    pub fn len(&self) -> NonZeroUsize {
        match self {
            RunValue::One(_) => nz!(1_usize),
            RunValue::Group { count, values } => {
                NonZeroUsize::new(count * values.iter().map(|r| r.len().get()).sum::<usize>())
                    .unwrap()
            }
        }
    }
}
