# HrleVec

A rust crate providing a vector like struct that stores data in hierarchal run-length encoding.

## Examples

```rust
use hrle_vec::HrleVec;

let mut hrle = HrleVec::new();

hrle.push_unencoded(1);
hrle.push_unencoded(2);
hrle.push_unencoded(1);
hrle.push_unencoded(2);
assert_eq!(hrle[1], 2);
assert_eq!(hrle[2], 1);

hrle.encode();
assert_eq!(hrle.runs_len(), 1);
```
