# HrleVec

A rust crate providing a vector like struct that stores data in hierarchal run-length encoding.

## Examples

```rust
use hrle_vec::HrleVec;

let mut hrle = HrleVec::new();

for _ in 0..10 {
    hrle.push_unencoded(1);
    hrle.push_unencoded(2);
}
assert_eq!(hrle[18], 1);
assert_eq!(hrle[19], 2);

hrle.encode();
assert_eq!(hrle.len(), 20);
assert_eq!(hrle.runs_len(), 1);
```

## Acknowledgements

This crate is heavily inspired by the [`rle_vec`](https://github.com/veldsla/rle_vec) crate by [@veldsla](https://github.com/veldsla).
