use std::hint::black_box;
use std::iter::repeat;

use criterion::{criterion_group, criterion_main, Criterion};
use hrle_vec::HrleVec;
use rle_vec::RleVec;
use statistical::{mean, median, standard_deviation};

#[global_allocator]
static ALLOC: jemallocator::Jemalloc = jemallocator::Jemalloc;

fn benchmark<'a, T: 'a, I: 'a>(c: &mut Criterion, name: &str, iter: &'a I, f: impl Fn(&'a I) -> T) {
    let epoch = jemalloc_ctl::epoch::mib().unwrap();
    let allocated = jemalloc_ctl::stats::allocated::mib().unwrap();

    let mut mem = vec![];
    c.bench_function(name, |b| {
        b.iter(|| {
            epoch.advance().unwrap();
            let before = allocated.read().unwrap();
            let _ctx = black_box(f(iter));
            epoch.advance().unwrap();
            mem.push(allocated.read().unwrap().abs_diff(before) as f64);
        })
    });
    let mean = mean(&mem);
    println!(
        "=> {}: Memory Allocated: {:.3} MiB +/- {:.3} ({:.3})\n",
        name,
        mean,
        standard_deviation(&mem, Some(mean)),
        median(&mem)
    );
}

fn hrle_all_dup(c: &mut Criterion) {
    let iter = repeat(1).take(10_000);
    benchmark(c, "Hrle: All Dup", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
}

fn rle_all_dup(c: &mut Criterion) {
    let iter = repeat(1).take(10_000);
    benchmark(c, "Rle: All Dup", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
}

fn vec_all_dup(c: &mut Criterion) {
    let iter = repeat(1).take(10_000);
    benchmark(c, "Vec: All Dup", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });
}

fn hrle_repeat_1_2(c: &mut Criterion) {
    let iter = [1, 2].iter().cycle().take(10_000);
    benchmark(c, "Hrle: Repeat 1 & 2", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
}

fn rle_repeat_1_2(c: &mut Criterion) {
    let iter = [1, 2].iter().cycle().take(10_000);
    benchmark(c, "Rle: Repeat 1 & 2", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
}

fn vec_repeat_1_2(c: &mut Criterion) {
    let iter = [1, 2].iter().cycle().take(10_000);
    benchmark(c, "Vec: Repeat 1 & 2", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });
}

fn hrle_repeat_long(c: &mut Criterion) {
    let iter = (0..100).cycle().take(10_000);
    benchmark(c, "Hrle: Repeat 0..100", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
}

fn rle_repeat_long(c: &mut Criterion) {
    let iter = (0..100).cycle().take(10_000);
    benchmark(c, "Rle: Repeat 0..100", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
}

fn vec_repeat_long(c: &mut Criterion) {
    let iter = (0..100).cycle().take(10_000);
    benchmark(c, "Vec: Repeat 0..100", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });
}

fn hrle_repeat_0_1_of_10_values(c: &mut Criterion) {
    let zeros = repeat(0).take(10);
    let ones = repeat(1).take(10);
    let iter = repeat(zeros.chain(ones)).flat_map(|x| x).take(10_000);
    benchmark(c, "Hrle: Repeat 0 & 1 ten times each", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
}

fn rle_repeat_0_1_of_10_values(c: &mut Criterion) {
    let zeros = repeat(0).take(10);
    let ones = repeat(1).take(10);
    let iter = repeat(zeros.chain(ones)).flat_map(|x| x).take(10_000);
    benchmark(c, "Rle: Repeat 0 & 1 ten times each", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
}

fn vec_repeat_0_1_of_10_values(c: &mut Criterion) {
    let zeros = repeat(0).take(10);
    let ones = repeat(1).take(10);
    let iter = repeat(zeros.chain(ones)).flat_map(|x| x).take(10_000);
    benchmark(c, "Vec: Repeat 0 & 1 ten times each", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });
}

fn hrle_all_unique(c: &mut Criterion) {
    let iter = 0..10_000;
    benchmark(c, "Hrle: All Unique", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
}

fn rle_all_unique(c: &mut Criterion) {
    let iter = 0..10_000;
    benchmark(c, "Rle: All Unique", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
}

fn vec_all_unique(c: &mut Criterion) {
    let iter = 0..10_000;
    benchmark(c, "Vec: All Unique", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });
}

criterion_group!(
    benches,
    hrle_all_dup,
    rle_all_dup,
    vec_all_dup,
    hrle_repeat_1_2,
    rle_repeat_1_2,
    vec_repeat_1_2,
    hrle_repeat_long,
    rle_repeat_long,
    vec_repeat_long,
    hrle_repeat_0_1_of_10_values,
    rle_repeat_0_1_of_10_values,
    vec_repeat_0_1_of_10_values,
    hrle_all_unique,
    rle_all_unique,
    vec_all_unique
);
criterion_main!(benches);
