use crate::{HrleVec, Run};

use std::fmt::{Display, Formatter, Result as FmtResult};

impl<T: Display> Display for Run<T> {
    fn fmt(&self, f: &mut Formatter<'_>) -> FmtResult {
        match self {
            Run::Just(v) => write!(f, "{}", v),
            Run::Group { count, values } => {
                write!(f, "({}", count)?;
                for value in values {
                    write!(f, "{}", value)?;
                }
                write!(f, ")")
            }
        }
    }
}

impl<T: Display> Display for HrleVec<T> {
    fn fmt(&self, f: &mut Formatter<'_>) -> FmtResult {
        self.runs.iter().try_for_each(|run| write!(f, "{}", run))
    }
}
