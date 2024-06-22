use criterion::{criterion_group, criterion_main, Criterion};
use hrle_vec::HrleVec;

fn bench_10_000_unique_values_from_slice(c: &mut Criterion) {
    let mut group = c.benchmark_group("Create 10_000 unique values from slice");

    let vec = Vec::from_iter(0..10_000);
    let slice = vec.as_slice();

    group.bench_with_input("Hrle", slice, |b, slice| b.iter(|| HrleVec::from(slice)));
    group.bench_with_input("Vec", slice, |b, slice| b.iter(|| Vec::from(slice)));

    group.finish();
}

fn bench_10_000_unique_values_from_iter(c: &mut Criterion) {
    let mut group = c.benchmark_group("Create 10_000 unique values from iter");

    let iter = 0..10_000;

    group.bench_with_input("Hrle", &iter, |b, iter| {
        b.iter(|| HrleVec::from_iter(iter.clone()))
    });
    group.bench_with_input("Vec", &iter, |b, iter| {
        b.iter(|| Vec::from_iter(iter.clone()))
    });

    group.finish();
}

criterion_group!(
    benches,
    bench_10_000_unique_values_from_slice,
    bench_10_000_unique_values_from_iter
);
criterion_main!(benches);
