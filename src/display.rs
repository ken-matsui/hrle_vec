use crate::{HrleVec, RunValue};

use std::fmt::{Display, Formatter, Result as FmtResult};

impl<T: Display> Display for RunValue<T> {
    fn fmt(&self, f: &mut Formatter<'_>) -> FmtResult {
        match self {
            RunValue::One(v) => write!(f, "{}", v),
            RunValue::Group { count, values } => {
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
