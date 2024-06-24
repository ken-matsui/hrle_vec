window.BENCHMARK_DATA = {
  "lastUpdate": 1719198029561,
  "repoUrl": "https://github.com/ken-matsui/hrle_vec",
  "entries": {
    "Memory Benchmark": [
      {
        "commit": {
          "author": {
            "email": "26405363+ken-matsui@users.noreply.github.com",
            "name": "Ken Matsui",
            "username": "ken-matsui"
          },
          "committer": {
            "email": "26405363+ken-matsui@users.noreply.github.com",
            "name": "Ken Matsui",
            "username": "ken-matsui"
          },
          "distinct": true,
          "id": "7113fc0c340867b5042af1458b34f6863c50b12a",
          "message": "improve memory.rs",
          "timestamp": "2024-06-23T19:54:54-07:00",
          "tree_id": "69bbdcc20506c054ba2ba3451c3758c1bd918a7f",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/7113fc0c340867b5042af1458b34f6863c50b12a"
        },
        "date": 1719198028736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Hrle: create 10,000 unique values from slice - Memory Allocated",
            "value": 749443360,
            "unit": "KiB",
            "range": "21032400"
          },
          {
            "name": "Rle: create 10,000 unique values from slice - Memory Allocated",
            "value": 269658974,
            "unit": "KiB",
            "range": "24284454"
          },
          {
            "name": "Vec: create 10,000 unique values from slice - Memory Allocated",
            "value": 41942934,
            "unit": "KiB",
            "range": "16794"
          },
          {
            "name": "Hrle: create 10,000 unique values from iter - Memory Allocated",
            "value": 752235978,
            "unit": "KiB",
            "range": "3009190"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268677839,
            "unit": "KiB",
            "range": "11073943"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942699,
            "unit": "KiB",
            "range": "58046"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 123,
            "unit": "KiB",
            "range": "16945"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 115,
            "unit": "KiB",
            "range": "23972"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942628,
            "unit": "KiB",
            "range": "95462"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 407,
            "unit": "KiB",
            "range": "40434"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 51,
            "unit": "KiB",
            "range": "10848"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942959,
            "unit": "KiB",
            "range": "11361"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49315530,
            "unit": "KiB",
            "range": "103842"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 1200,
            "unit": "KiB",
            "range": "131074"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942922,
            "unit": "KiB",
            "range": "18481"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49316021,
            "unit": "KiB",
            "range": "162563"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2319,
            "unit": "KiB",
            "range": "200131"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41942896,
            "unit": "KiB",
            "range": "154231"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 432,
            "unit": "KiB",
            "range": "78882"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 269024193,
            "unit": "KiB",
            "range": "16192417"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885705,
            "unit": "KiB",
            "range": "59603"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 927,
            "unit": "KiB",
            "range": "124150"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 268435694,
            "unit": "KiB",
            "range": "95870"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885687,
            "unit": "KiB",
            "range": "59466"
          }
        ]
      }
    ]
  }
}