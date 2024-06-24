mod utils;

use std::hint::black_box;
use std::iter::repeat;

use criterion::{criterion_group, criterion_main, Criterion};
use hrle_vec::HrleVec;
use rle_vec::RleVec;

use utils::bench_with_memory;

fn all_dup(c: &mut Criterion) {
    let mut group = c.benchmark_group("All Dup");

    let iter = repeat(1).take(10_000);

    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(black_box(iter.clone()))
    });

    group.finish();
}

fn repeat_1_2(c: &mut Criterion) {
    let mut group = c.benchmark_group("Repeat 1 & 2");

    let iter = [1, 2].iter().cycle().take(10_000);
    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(black_box(iter.clone()))
    });

    group.finish();
}

fn repeat_long(c: &mut Criterion) {
    let mut group = c.benchmark_group("Repeat 0..100");

    let iter = (0..100).cycle().take(10_000);
    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(black_box(iter.clone()))
    });

    group.finish();
}

fn repeat_0_1_of_10_values(c: &mut Criterion) {
    let mut group = c.benchmark_group("Repeat 0 & 1 ten times each");

    let zeros = repeat(0).take(10);
    let ones = repeat(1).take(10);
    let iter = repeat(zeros.chain(ones)).flatten().take(10_000);

    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(black_box(iter.clone()))
    });

    group.finish();
}

fn all_unique(c: &mut Criterion) {
    let mut group = c.benchmark_group("All Unique");

    let iter = 0..10_000;
    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(black_box(iter.clone()))
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(black_box(iter.clone()))
    });

    group.finish();
}

criterion_group!(
    benches,
    all_dup,
    repeat_1_2,
    repeat_long,
    repeat_0_1_of_10_values,
    all_unique,
);
criterion_main!(benches);
