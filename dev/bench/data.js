window.BENCHMARK_DATA = {
  "lastUpdate": 1719198435297,
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
      },
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
          "id": "fa942ac7cc512d61c01a3701fa228de45504a990",
          "message": "added access bench",
          "timestamp": "2024-06-23T19:55:12-07:00",
          "tree_id": "1fe2d09946318c5180659dd825559ccb1ebaca34",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/fa942ac7cc512d61c01a3701fa228de45504a990"
        },
        "date": 1719198165079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Hrle: create 10,000 unique values from slice - Memory Allocated",
            "value": 749840899,
            "unit": "KiB",
            "range": "20211198"
          },
          {
            "name": "Rle: create 10,000 unique values from slice - Memory Allocated",
            "value": 269675242,
            "unit": "KiB",
            "range": "21975052"
          },
          {
            "name": "Vec: create 10,000 unique values from slice - Memory Allocated",
            "value": 41942809,
            "unit": "KiB",
            "range": "48482"
          },
          {
            "name": "Hrle: create 10,000 unique values from iter - Memory Allocated",
            "value": 752366749,
            "unit": "KiB",
            "range": "3424059"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268604787,
            "unit": "KiB",
            "range": "5324056"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942700,
            "unit": "KiB",
            "range": "92076"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 388,
            "unit": "KiB",
            "range": "48711"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 178,
            "unit": "KiB",
            "range": "30348"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942704,
            "unit": "KiB",
            "range": "92061"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 403,
            "unit": "KiB",
            "range": "39240"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 60,
            "unit": "KiB",
            "range": "13126"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942910,
            "unit": "KiB",
            "range": "25545"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49315553,
            "unit": "KiB",
            "range": "106967"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 1209,
            "unit": "KiB",
            "range": "131895"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942936,
            "unit": "KiB",
            "range": "14511"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49315815,
            "unit": "KiB",
            "range": "117329"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2451,
            "unit": "KiB",
            "range": "202458"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41942619,
            "unit": "KiB",
            "range": "167813"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 145,
            "unit": "KiB",
            "range": "26985"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 268435369,
            "unit": "KiB",
            "range": "192281"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885735,
            "unit": "KiB",
            "range": "55973"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 742,
            "unit": "KiB",
            "range": "79659"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 268435271,
            "unit": "KiB",
            "range": "172892"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885761,
            "unit": "KiB",
            "range": "44222"
          }
        ]
      },
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
          "id": "9650ada0ecec0737f729f67be4a76c5bb6b59ab4",
          "message": "optimize run_start",
          "timestamp": "2024-06-23T19:59:39-07:00",
          "tree_id": "b2bfc5b4b546c6fe1cfa8d203fa926dcbc962a3e",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/9650ada0ecec0737f729f67be4a76c5bb6b59ab4"
        },
        "date": 1719198434395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Hrle: create 10,000 unique values from slice - Memory Allocated",
            "value": 749840899,
            "unit": "KiB",
            "range": "20211198"
          },
          {
            "name": "Rle: create 10,000 unique values from slice - Memory Allocated",
            "value": 269662074,
            "unit": "KiB",
            "range": "24504150"
          },
          {
            "name": "Vec: create 10,000 unique values from slice - Memory Allocated",
            "value": 41942809,
            "unit": "KiB",
            "range": "48482"
          },
          {
            "name": "Hrle: create 10,000 unique values from iter - Memory Allocated",
            "value": 752238089,
            "unit": "KiB",
            "range": "3006424"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268605970,
            "unit": "KiB",
            "range": "5341909"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942700,
            "unit": "KiB",
            "range": "92076"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 365,
            "unit": "KiB",
            "range": "47211"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 204,
            "unit": "KiB",
            "range": "59375"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942836,
            "unit": "KiB",
            "range": "46851"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 990,
            "unit": "KiB",
            "range": "135786"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 58,
            "unit": "KiB",
            "range": "12965"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942664,
            "unit": "KiB",
            "range": "94429"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49315793,
            "unit": "KiB",
            "range": "87096"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 1341,
            "unit": "KiB",
            "range": "152460"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942938,
            "unit": "KiB",
            "range": "14494"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49315932,
            "unit": "KiB",
            "range": "111001"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2014,
            "unit": "KiB",
            "range": "181862"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41942765,
            "unit": "KiB",
            "range": "189588"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 144,
            "unit": "KiB",
            "range": "26909"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 268843432,
            "unit": "KiB",
            "range": "12282550"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885749,
            "unit": "KiB",
            "range": "55397"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 737,
            "unit": "KiB",
            "range": "79643"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 268435252,
            "unit": "KiB",
            "range": "173966"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885911,
            "unit": "KiB",
            "range": "28071"
          }
        ]
      }
    ],
    "Runtime Benchmark": [
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
        "date": 1719198030554,
        "tool": "cargo",
        "benches": [
          {
            "name": "create 10,000 unique values from slice/Hrle",
            "value": 77682829,
            "range": "± 240033",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Rle",
            "value": 87779,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Vec",
            "value": 74034,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Hrle",
            "value": 77756836,
            "range": "± 69126",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Rle",
            "value": 82894,
            "range": "± 3305",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Vec",
            "value": 73267,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Hrle",
            "value": 109495,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Rle",
            "value": 74659,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Vec",
            "value": 73399,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Hrle",
            "value": 111497,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Rle",
            "value": 71546,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Vec",
            "value": 73035,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Hrle",
            "value": 130930,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Rle",
            "value": 76616,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Vec",
            "value": 74028,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Hrle",
            "value": 169973,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Rle",
            "value": 110370,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Vec",
            "value": 112227,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Hrle",
            "value": 81577,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Rle",
            "value": 86103,
            "range": "± 1594",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Vec",
            "value": 75354,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Hrle",
            "value": 94614,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Rle",
            "value": 91191,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Vec",
            "value": 81880,
            "range": "± 1631",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "fa942ac7cc512d61c01a3701fa228de45504a990",
          "message": "added access bench",
          "timestamp": "2024-06-23T19:55:12-07:00",
          "tree_id": "1fe2d09946318c5180659dd825559ccb1ebaca34",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/fa942ac7cc512d61c01a3701fa228de45504a990"
        },
        "date": 1719198166037,
        "tool": "cargo",
        "benches": [
          {
            "name": "iterate 10,000 unique values/Hrle",
            "value": 26597282,
            "range": "± 147120",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Rle",
            "value": 21791,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Vec",
            "value": 6195,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Hrle",
            "value": 31077,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Rle",
            "value": 22036,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Vec",
            "value": 4730,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Hrle",
            "value": 2838944,
            "range": "± 12093",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Rle",
            "value": 22382,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Vec",
            "value": 6198,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Hrle",
            "value": 31234,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Rle",
            "value": 21886,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Vec",
            "value": 4648,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Hrle",
            "value": 77796687,
            "range": "± 519401",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Rle",
            "value": 87449,
            "range": "± 1429",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Vec",
            "value": 74713,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Hrle",
            "value": 77769808,
            "range": "± 98532",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Rle",
            "value": 82469,
            "range": "± 2855",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Vec",
            "value": 73566,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Hrle",
            "value": 110543,
            "range": "± 1232",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Rle",
            "value": 74883,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Vec",
            "value": 73839,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Hrle",
            "value": 111906,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Rle",
            "value": 71606,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Vec",
            "value": 73315,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Hrle",
            "value": 131274,
            "range": "± 8992",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Rle",
            "value": 77351,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Vec",
            "value": 74264,
            "range": "± 1249",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Hrle",
            "value": 171306,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Rle",
            "value": 110580,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Vec",
            "value": 111126,
            "range": "± 879",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Hrle",
            "value": 82378,
            "range": "± 871",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Rle",
            "value": 86474,
            "range": "± 2270",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Vec",
            "value": 75754,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Hrle",
            "value": 95638,
            "range": "± 1084",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Rle",
            "value": 91799,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Vec",
            "value": 82400,
            "range": "± 342",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}