use std::fs::{File, OpenOptions};
use std::hint::black_box;
use std::io::{Read, Write};

use criterion::{criterion_group, criterion_main, Criterion};
use hrle_vec::HrleVec;
use itertools::repeat_n;
use rle_vec::RleVec;
use serde::{Deserialize, Serialize};
use statistical::{mean, standard_deviation};

#[global_allocator]
static ALLOC: jemallocator::Jemalloc = jemallocator::Jemalloc;

#[derive(Serialize, Deserialize)]
struct BenchmarkResult {
    name: String,
    unit: String,
    value: u64,
    range: String,
}

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
            mem.push(
                allocated.read().unwrap().abs_diff(before) as f64 * 1024., // to KiB
            );
        })
    });

    let mean = mean(&mem);
    let std_dev = standard_deviation(&mem, Some(mean)) as u64;
    let mean = mean as u64;
    println!("=> {name} ... memory allocated: {mean:>11} KiB (+/- {std_dev})\n");

    let result = BenchmarkResult {
        name: format!("{name} - Memory Allocated"),
        unit: "KiB".to_string(),
        value: mean,
        range: std_dev.to_string(),
    };

    let file_path = "memory_benchmark_results.json";
    let mut results = if let Ok(mut file) = File::open(file_path) {
        let mut data = String::new();
        file.read_to_string(&mut data).unwrap();
        serde_json::from_str::<Vec<BenchmarkResult>>(&data).unwrap_or_else(|_| vec![])
    } else {
        vec![]
    };

    results.push(result);

    let json = serde_json::to_string_pretty(&results).unwrap();
    let mut file = OpenOptions::new()
        .write(true)
        .create(true)
        .truncate(true)
        .open(file_path)
        .unwrap();

    writeln!(file, "{}", json).unwrap();
}

fn hrle_all_dup(c: &mut Criterion) {
    let iter = repeat_n(1, 10_000);
    benchmark(c, "Hrle: All Dup", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
}

fn rle_all_dup(c: &mut Criterion) {
    let iter = repeat_n(1, 10_000);
    benchmark(c, "Rle: All Dup", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
}

fn vec_all_dup(c: &mut Criterion) {
    let iter = repeat_n(1, 10_000);
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
    let zeros = repeat_n(0, 10);
    let ones = repeat_n(1, 10);
    let iter = repeat_n(zeros.chain(ones), 10_000).flatten();
    benchmark(c, "Hrle: Repeat 0 & 1 ten times each", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
}

fn rle_repeat_0_1_of_10_values(c: &mut Criterion) {
    let zeros = repeat_n(0, 10);
    let ones = repeat_n(1, 10);
    let iter = repeat_n(zeros.chain(ones), 10_000).flatten();
    benchmark(c, "Rle: Repeat 0 & 1 ten times each", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
}

fn vec_repeat_0_1_of_10_values(c: &mut Criterion) {
    let zeros = repeat_n(0, 10);
    let ones = repeat_n(1, 10);
    let iter = repeat_n(zeros.chain(ones), 10_000).flatten();
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
