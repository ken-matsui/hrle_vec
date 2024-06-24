use std::hint::black_box;

use criterion::{criterion_group, criterion_main, Criterion};
use hrle_vec::HrleVec;
use itertools::repeat_n;
use rle_vec::RleVec;

fn create_10_000_unique_values_from_slice(c: &mut Criterion) {
    let mut group = c.benchmark_group("10,000 unique values from slice");

    let vec = Vec::from_iter(0..10_000);
    let slice = vec.as_slice();

    group.bench_with_input("Hrle", slice, |b, slice| {
        b.iter(|| HrleVec::from(black_box(slice)))
    });
    group.bench_with_input("Rle", slice, |b, slice| {
        b.iter(|| RleVec::from(black_box(slice)))
    });
    group.bench_with_input("Vec", slice, |b, slice| {
        b.iter(|| Vec::from(black_box(slice)))
    });

    group.finish();
}

fn create_10_000_unique_values_from_iter(c: &mut Criterion) {
    let mut group = c.benchmark_group("10,000 unique values from iter");

    group.bench_function("Hrle", |b| b.iter(|| HrleVec::from_iter(0..10_000)));
    group.bench_function("Rle", |b| b.iter(|| RleVec::from_iter(0..10_000)));
    group.bench_function("Vec", |b| b.iter(|| Vec::from_iter(0..10_000)));

    group.finish();
}

fn create_10_000_equal_values_from_slice(c: &mut Criterion) {
    let mut group = c.benchmark_group("10,000 equal values from slice");

    let vec = vec![0; 10_000];
    let slice = vec.as_slice();

    group.bench_with_input("Hrle", slice, |b, slice| {
        b.iter(|| HrleVec::from(black_box(slice)))
    });
    group.bench_with_input("Rle", slice, |b, slice| {
        b.iter(|| RleVec::from(black_box(slice)))
    });
    group.bench_with_input("Vec", slice, |b, slice| {
        b.iter(|| Vec::from(black_box(slice)))
    });

    group.finish();
}

fn create_10_000_equal_values_from_iter(c: &mut Criterion) {
    let mut group = c.benchmark_group("10,000 equal values from iter");

    group.bench_function("Hrle", |b| {
        b.iter(|| HrleVec::from_iter(repeat_n(0, 10_000)))
    });
    group.bench_function("Rle", |b| b.iter(|| RleVec::from_iter(repeat_n(0, 10_000))));
    group.bench_function("Vec", |b| b.iter(|| Vec::from_iter(repeat_n(0, 10_000))));

    group.finish();
}

fn create_1000_runs_of_10_values_from_slice(c: &mut Criterion) {
    let mut group = c.benchmark_group("1,000 runs of 10 values from slice");

    let zeros = repeat_n(0, 10);
    let ones = repeat_n(1, 10);
    let iter = repeat_n(zeros.chain(ones), 10_000).flatten();

    let vec = Vec::from_iter(iter);
    let slice = vec.as_slice();

    group.bench_function("Hrle", |b| b.iter(|| HrleVec::from(black_box(slice))));
    group.bench_function("Rle", |b| b.iter(|| RleVec::from(black_box(slice))));
    group.bench_function("Vec", |b| b.iter(|| Vec::from(black_box(slice))));

    group.finish();
}

fn create_1000_runs_of_10_values_from_iter(c: &mut Criterion) {
    let mut group = c.benchmark_group("1,000 runs of 10 values from iter");

    let zeros = repeat_n(0, 10);
    let ones = repeat_n(1, 10);
    let iter = repeat_n(zeros.chain(ones), 10_000).flatten();

    group.bench_function("Hrle", |b| {
        b.iter(|| HrleVec::from_iter(black_box(iter.clone())))
    });
    group.bench_function("Rle", |b| {
        b.iter(|| RleVec::from_iter(black_box(iter.clone())))
    });
    group.bench_function("Vec", |b| {
        b.iter(|| Vec::from_iter(black_box(iter.clone())))
    });

    group.finish();
}

fn create_1000_runs_of_10_alternating_values_from_slice(c: &mut Criterion) {
    let mut group = c.benchmark_group("1,000 runs of 10 alternating values from slice");

    let vec = Vec::from_iter([0, 1].iter().cycle().take(10_000));
    let slice = vec.as_slice();

    group.bench_function("Hrle", |b| b.iter(|| HrleVec::from(black_box(slice))));
    group.bench_function("Rle", |b| b.iter(|| RleVec::from(black_box(slice))));
    group.bench_function("Vec", |b| b.iter(|| Vec::from(black_box(slice))));

    group.finish();
}

fn create_1000_runs_of_10_alternating_values_from_iter(c: &mut Criterion) {
    let mut group = c.benchmark_group("1,000 runs of 10 alternating values from iter");

    group.bench_function("Hrle", |b| {
        b.iter(|| HrleVec::from_iter([0, 1].iter().cycle().take(10_000)))
    });
    group.bench_function("Rle", |b| {
        b.iter(|| RleVec::from_iter([0, 1].iter().cycle().take(10_000)))
    });
    group.bench_function("Vec", |b| {
        b.iter(|| Vec::from_iter([0, 1].iter().cycle().take(10_000)))
    });

    group.finish();
}

criterion_group!(
    benches,
    create_10_000_unique_values_from_slice,
    create_10_000_unique_values_from_iter,
    create_10_000_equal_values_from_slice,
    create_10_000_equal_values_from_iter,
    create_1000_runs_of_10_values_from_slice,
    create_1000_runs_of_10_values_from_iter,
    create_1000_runs_of_10_alternating_values_from_slice,
    create_1000_runs_of_10_alternating_values_from_iter,
);
criterion_main!(benches);
