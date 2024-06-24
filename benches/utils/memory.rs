use std::fs::{File, OpenOptions};
use std::hint::black_box;
use std::io::{Read, Write};

use criterion::measurement::Measurement;
use criterion::BenchmarkGroup;
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

fn save_results(name: &str, mem: &[f64]) {
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

pub fn bench_memory<M: Measurement, T>(
    group: &mut BenchmarkGroup<'_, M>,
    name: &str,
    f: impl Fn() -> T,
) {
    let epoch = jemalloc_ctl::epoch::mib().unwrap();
    let allocated = jemalloc_ctl::stats::allocated::mib().unwrap();

    let mut mem = vec![];
    group.bench_function(name, |b| {
        b.iter(|| {
            epoch.advance().unwrap();
            let before = allocated.read().unwrap();
            let _ctx = black_box(f());
            epoch.advance().unwrap();
            mem.push(
                allocated.read().unwrap().abs_diff(before) as f64 * 1024., // to KiB
            );
        })
    });
    save_results(name, &mem[..]);
}

pub fn bench_memory_with_input<M: Measurement, T, I: ?Sized>(
    group: &mut BenchmarkGroup<'_, M>,
    name: &str,
    input: &I,
    f: impl Fn(&I) -> T,
) {
    let epoch = jemalloc_ctl::epoch::mib().unwrap();
    let allocated = jemalloc_ctl::stats::allocated::mib().unwrap();

    let mut mem = vec![];
    group.bench_with_input(name, input, |b, input| {
        b.iter(|| {
            epoch.advance().unwrap();
            let before = allocated.read().unwrap();
            let _ctx = black_box(f(black_box(input)));
            epoch.advance().unwrap();
            mem.push(
                allocated.read().unwrap().abs_diff(before) as f64 * 1024., // to KiB
            );
        })
    });
    save_results(name, &mem[..]);
}
