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
        HrleVec { runs: vec![] }
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
