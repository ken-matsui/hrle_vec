mod display;
mod impls;
mod parse;

pub struct HrleVec<T> {
    runs: Vec<Run<T>>,
}

#[derive(Debug, Clone)]
pub enum Run<T> {
    One(T),
    Group { count: usize, values: Vec<Run<T>> },
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

impl<T> Run<T> {
    pub fn len(&self) -> usize {
        match self {
            Run::One(_) => 1,
            Run::Group { count, values } => count * values.iter().map(|r| r.len()).sum::<usize>(),
        }
    }
}
