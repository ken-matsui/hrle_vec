use std::fs::{File, OpenOptions};
use std::hint::black_box;
use std::io::{Read, Write};
use std::iter::repeat;

use criterion::measurement::Measurement;
use criterion::{criterion_group, criterion_main, BenchmarkGroup, Criterion};
use hrle_vec::HrleVec;
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

fn bench_with_memory<'a, M: Measurement, T: 'a, I: 'a>(
    group: &mut BenchmarkGroup<'a, M>,
    name: &str,
    iter: &'a I,
    f: impl Fn(&'a I) -> T,
) {
    let epoch = jemalloc_ctl::epoch::mib().unwrap();
    let allocated = jemalloc_ctl::stats::allocated::mib().unwrap();

    let mut mem = vec![];
    group.bench_function(name, |b| {
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

    let file_path = "memory_benchmark_results.json";
    let mut results = if let Ok(mut file) = File::open(file_path) {
        let mut data = String::new();
        file.read_to_string(&mut data).unwrap();
        serde_json::from_str::<Vec<BenchmarkResult>>(&data).unwrap_or_else(|_| vec![])
    } else {
        vec![]
    };
    results.push(BenchmarkResult {
        name: format!("{name} - Memory Allocated"),
        unit: "KiB".to_string(),
        value: mean,
        range: std_dev.to_string(),
    });

    let json = serde_json::to_string_pretty(&results).unwrap();
    let mut file = OpenOptions::new()
        .write(true)
        .create(true)
        .truncate(true)
        .open(file_path)
        .unwrap();

    writeln!(file, "{}", json).unwrap();
}

fn all_dup(c: &mut Criterion) {
    let mut group = c.benchmark_group("All Dup");

    let iter = repeat(1).take(10_000);

    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });

    group.finish();
}

fn repeat_1_2(c: &mut Criterion) {
    let mut group = c.benchmark_group("Repeat 1 & 2");

    let iter = [1, 2].iter().cycle().take(10_000);
    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });

    group.finish();
}

fn repeat_long(c: &mut Criterion) {
    let mut group = c.benchmark_group("Repeat 0..100");

    let iter = (0..100).cycle().take(10_000);
    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });

    group.finish();
}

fn repeat_0_1_of_10_values(c: &mut Criterion) {
    let mut group = c.benchmark_group("Repeat 0 & 1 ten times each");

    let zeros = repeat(0).take(10);
    let ones = repeat(1).take(10);
    let iter = repeat(zeros.chain(ones)).flatten().take(10_000);

    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(iter.clone())
    });

    group.finish();
}

fn all_unique(c: &mut Criterion) {
    let mut group = c.benchmark_group("All Unique");

    let iter = 0..10_000;
    bench_with_memory(&mut group, "Hrle", &iter, |iter| {
        HrleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Rle", &iter, |iter| {
        RleVec::from_iter(iter.clone())
    });
    bench_with_memory(&mut group, "Vec", &iter, |iter| {
        Vec::from_iter(iter.clone())
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
