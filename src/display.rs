use std::fmt::{Display, Formatter, Result as FmtResult};

use crate::{HrleVec, InternalRun, Run, RunValue};

impl<T: Display> Display for HrleVec<T> {
    fn fmt(&self, f: &mut Formatter<'_>) -> FmtResult {
        self.runs.iter().try_for_each(|run| write!(f, "{}", run))
    }
}

impl<T: Display> Display for Run<T> {
    fn fmt(&self, f: &mut Formatter<'_>) -> FmtResult {
        write!(f, "{}", self.value)
    }
}

impl<T: Display> Display for InternalRun<T> {
    fn fmt(&self, f: &mut Formatter<'_>) -> FmtResult {
        write!(f, "{}", self.value)
    }
}

impl<T: Display> Display for RunValue<T> {
    fn fmt(&self, f: &mut Formatter<'_>) -> FmtResult {
        match self {
            RunValue::One { value, .. } => write!(f, "{}", value),
            RunValue::Repeat { n, values, .. } => {
                write!(f, "({}", n)?;
                for value in values.internal_runs_iter() {
                    write!(f, "{}", value)?;
                }
                write!(f, ")")
            }
        }
    }
}
