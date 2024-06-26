mod utils;

use std::hint::black_box;
use std::iter::repeat;

use criterion::{criterion_group, criterion_main, Criterion};
use hrle_vec::HrleVec;
use rle_vec::RleVec;

use utils::{bench_memory, bench_memory_with_input};

fn create_10_000_unique_values_from_slice(c: &mut Criterion) {
    let group_name = "create 10,000 unique values from slice";
    let mut group = c.benchmark_group(group_name);

    let vec = Vec::from_iter(0..10_000);
    let slice = vec.as_slice();

    bench_memory_with_input(&mut group, group_name, "Hrle", slice, |slice| {
        HrleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Rle", slice, |slice| {
        RleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Vec", slice, |slice| {
        Vec::from(black_box(slice))
    });

    group.finish();
}

fn create_10_000_unique_values_from_iter(c: &mut Criterion) {
    let group_name = "create 10,000 unique values from iter";
    let mut group = c.benchmark_group(group_name);

    bench_memory(&mut group, group_name, "Hrle", || {
        HrleVec::from_iter(0..10_000)
    });
    bench_memory(&mut group, group_name, "Rle", || {
        RleVec::from_iter(0..10_000)
    });
    bench_memory(&mut group, group_name, "Vec", || Vec::from_iter(0..10_000));

    group.finish();
}

fn create_10_000_equal_values_from_slice(c: &mut Criterion) {
    let group_name = "create 10,000 equal values from slice";
    let mut group = c.benchmark_group(group_name);

    let vec = vec![0; 10_000];
    let slice = vec.as_slice();

    bench_memory_with_input(&mut group, group_name, "Hrle", slice, |slice| {
        HrleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Rle", slice, |slice| {
        RleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Vec", slice, |slice| {
        Vec::from(black_box(slice))
    });

    group.finish();
}

fn create_10_000_equal_values_from_iter(c: &mut Criterion) {
    let group_name = "create 10,000 equal values from iter";
    let mut group = c.benchmark_group(group_name);

    bench_memory(&mut group, group_name, "Hrle", || {
        HrleVec::from_iter(repeat(0).take(10_000))
    });
    bench_memory(&mut group, group_name, "Rle", || {
        RleVec::from_iter(repeat(0).take(10_000))
    });
    bench_memory(&mut group, group_name, "Vec", || {
        Vec::from_iter(repeat(0).take(10_000))
    });

    group.finish();
}

fn create_10_000_palindrome_values_from_slice(c: &mut Criterion) {
    // This is the worst case for HrleVec.
    let group_name = "create 10,000 palindrome values from slice";
    let mut group = c.benchmark_group(group_name);

    let zero_to_half = 0..5000;
    let half_to_end = (0..5000).rev();

    let vec = Vec::from_iter(zero_to_half.chain(half_to_end));
    let slice = vec.as_slice();

    bench_memory_with_input(&mut group, group_name, "Hrle", slice, |slice| {
        HrleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Rle", slice, |slice| {
        RleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Vec", slice, |slice| {
        Vec::from(black_box(slice))
    });

    group.finish();
}

fn create_10_000_palindrome_values_from_iter(c: &mut Criterion) {
    // This is the worst case for HrleVec.
    let group_name = "create 10,000 palindrome values from iter";
    let mut group = c.benchmark_group(group_name);

    let zero_to_half = 0..5000;
    let half_to_end = (0..5000).rev();
    let iter = zero_to_half.chain(half_to_end);

    bench_memory_with_input(&mut group, group_name, "Hrle", &iter, |iter| {
        HrleVec::from_iter(black_box(iter.clone()))
    });
    bench_memory_with_input(&mut group, group_name, "Rle", &iter, |iter| {
        RleVec::from_iter(black_box(iter.clone()))
    });
    bench_memory_with_input(&mut group, group_name, "Vec", &iter, |iter| {
        Vec::from_iter(black_box(iter.clone()))
    });

    group.finish();
}

fn create_1000_runs_of_10_values_from_slice(c: &mut Criterion) {
    let group_name = "create 1,000 runs of 10 values from slice";
    let mut group = c.benchmark_group(group_name);

    let zeros = repeat(0).take(10);
    let ones = repeat(1).take(10);
    let iter = repeat(zeros.chain(ones)).flatten().take(10_000);

    let vec = Vec::from_iter(iter);
    let slice = vec.as_slice();

    bench_memory_with_input(&mut group, group_name, "Hrle", slice, |slice| {
        HrleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Rle", slice, |slice| {
        RleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Vec", slice, |slice| {
        Vec::from(black_box(slice))
    });

    group.finish();
}

fn create_1000_runs_of_10_values_from_iter(c: &mut Criterion) {
    let group_name = "create 1,000 runs of 10 values from iter";
    let mut group = c.benchmark_group(group_name);

    let zeros = repeat(0).take(10);
    let ones = repeat(1).take(10);
    let iter = repeat(zeros.chain(ones)).flatten().take(10_000);

    bench_memory_with_input(&mut group, group_name, "Hrle", &iter, |iter| {
        HrleVec::from_iter(black_box(iter.clone()))
    });
    bench_memory_with_input(&mut group, group_name, "Rle", &iter, |iter| {
        RleVec::from_iter(black_box(iter.clone()))
    });
    bench_memory_with_input(&mut group, group_name, "Vec", &iter, |iter| {
        Vec::from_iter(black_box(iter.clone()))
    });

    group.finish();
}

fn create_5000_runs_of_2_alternating_values_from_slice(c: &mut Criterion) {
    let group_name = "create 5,000 runs of 2 alternating values from slice";
    let mut group = c.benchmark_group(group_name);

    let vec = Vec::from_iter([0, 1].iter().cycle().take(10_000));
    let slice = vec.as_slice();

    bench_memory_with_input(&mut group, group_name, "Hrle", slice, |slice| {
        HrleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Rle", slice, |slice| {
        RleVec::from(black_box(slice))
    });
    bench_memory_with_input(&mut group, group_name, "Vec", slice, |slice| {
        Vec::from(black_box(slice))
    });

    group.finish();
}

fn create_5000_runs_of_2_alternating_values_from_iter(c: &mut Criterion) {
    let group_name = "create 5,000 runs of 2 alternating values from iter";
    let mut group = c.benchmark_group(group_name);

    bench_memory(&mut group, group_name, "Hrle", || {
        HrleVec::from_iter([0, 1].iter().cycle().take(10_000))
    });
    bench_memory(&mut group, group_name, "Rle", || {
        RleVec::from_iter([0, 1].iter().cycle().take(10_000))
    });
    bench_memory(&mut group, group_name, "Vec", || {
        Vec::from_iter([0, 1].iter().cycle().take(10_000))
    });

    group.finish();
}

criterion_group!(
    benches,
    create_10_000_unique_values_from_slice,
    create_10_000_unique_values_from_iter,
    create_10_000_equal_values_from_slice,
    create_10_000_equal_values_from_iter,
    create_10_000_palindrome_values_from_slice,
    create_10_000_palindrome_values_from_iter,
    create_1000_runs_of_10_values_from_slice,
    create_1000_runs_of_10_values_from_iter,
    create_5000_runs_of_2_alternating_values_from_slice,
    create_5000_runs_of_2_alternating_values_from_iter,
);
criterion_main!(benches);
