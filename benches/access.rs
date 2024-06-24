use std::hint::black_box;
use std::iter::repeat;

use criterion::{criterion_group, criterion_main, Criterion};
use hrle_vec::HrleVec;
use rle_vec::RleVec;

fn iterate_10_000_unique_values(c: &mut Criterion) {
    let group_name = "iterate 10,000 unique values";
    let mut group = c.benchmark_group(group_name);

    let hrle = HrleVec::from_iter(0..10_000);
    group.bench_with_input("Hrle", &hrle, |b, hrle| {
        b.iter(|| {
            for (i, v) in black_box(hrle).iter().enumerate() {
                assert_eq!(i, *v);
            }
        })
    });

    let rle = RleVec::from_iter(0..10_000);
    group.bench_with_input("Rle", &rle, |b, rle| {
        b.iter(|| {
            for (i, v) in black_box(rle).iter().enumerate() {
                assert_eq!(i, *v);
            }
        })
    });

    let vec = Vec::from_iter(0..10_000);
    group.bench_with_input("Vec", &vec, |b, vec| {
        b.iter(|| {
            for (i, v) in black_box(vec).iter().enumerate() {
                assert_eq!(i, *v);
            }
        })
    });

    group.finish();
}

fn iterate_10_000_equal_values(c: &mut Criterion) {
    let group_name = "iterate 10,000 equal values";
    let mut group = c.benchmark_group(group_name);

    let vec = vec![0; 10_000];

    let hrle = HrleVec::from(&vec[..]);
    group.bench_with_input("Hrle", &hrle, |b, hrle| {
        b.iter(|| {
            for v in black_box(hrle).iter() {
                assert_eq!(*v, 0);
            }
        })
    });

    let rle = RleVec::from(&vec[..]);
    group.bench_with_input("Rle", &rle, |b, rle| {
        b.iter(|| {
            for v in black_box(rle).iter() {
                assert_eq!(*v, 0);
            }
        })
    });

    group.bench_with_input("Vec", &vec, |b, vec| {
        b.iter(|| {
            for v in black_box(vec) {
                assert_eq!(*v, 0);
            }
        })
    });

    group.finish();
}

fn iterate_1000_runs_of_10_values(c: &mut Criterion) {
    let group_name = "iterate 1,000 runs of 10 values";
    let mut group = c.benchmark_group(group_name);

    let zeros = repeat(0).take(10);
    let ones = repeat(1).take(10);
    let iter = repeat(zeros.chain(ones)).flatten().take(10_000);

    let vec = Vec::from_iter(iter);
    let slice = vec.as_slice();

    let hrle = HrleVec::from(slice);
    group.bench_with_input("Hrle", &hrle, |b, hrle| {
        b.iter(|| {
            for (i, v) in black_box(hrle).iter().enumerate() {
                assert_eq!(*v, (i / 10) % 2);
            }
        })
    });

    let rle = RleVec::from(slice);
    group.bench_with_input("Rle", &rle, |b, rle| {
        b.iter(|| {
            for (i, v) in black_box(rle).iter().enumerate() {
                assert_eq!(*v, (i / 10) % 2);
            }
        })
    });

    group.bench_with_input("Vec", &vec, |b, vec| {
        b.iter(|| {
            for (i, v) in black_box(vec).iter().enumerate() {
                assert_eq!(*v, (i / 10) % 2);
            }
        })
    });

    group.finish();
}

fn iterate_5000_runs_of_2_alternating_values(c: &mut Criterion) {
    let group_name = "iterate 5,000 runs of 2 alternating values";
    let mut group = c.benchmark_group(group_name);

    let vec = Vec::from_iter([0, 1].into_iter().cycle().take(10_000));
    let slice = vec.as_slice();

    let hrle = HrleVec::from(slice);
    group.bench_with_input("Hrle", &hrle, |b, hrle| {
        b.iter(|| {
            for (i, v) in black_box(hrle).iter().enumerate() {
                assert_eq!(*v, i % 2);
            }
        })
    });

    let rle = RleVec::from(slice);
    group.bench_with_input("Rle", &rle, |b, rle| {
        b.iter(|| {
            for (i, v) in black_box(rle).iter().enumerate() {
                assert_eq!(*v, i % 2);
            }
        })
    });

    group.bench_with_input("Vec", &vec, |b, vec| {
        b.iter(|| {
            for (i, v) in black_box(vec).iter().enumerate() {
                assert_eq!(*v, i % 2);
            }
        })
    });

    group.finish();
}

criterion_group!(
    benches,
    iterate_10_000_unique_values,
    iterate_10_000_equal_values,
    iterate_1000_runs_of_10_values,
    iterate_5000_runs_of_2_alternating_values,
);
criterion_main!(benches);
