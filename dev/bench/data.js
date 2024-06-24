window.BENCHMARK_DATA = {
  "lastUpdate": 1719233681730,
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
          "id": "855e37aebe82277b4bee42b3e47ea9cf0d3b9bd1",
          "message": "style tweak",
          "timestamp": "2024-06-23T20:02:24-07:00",
          "tree_id": "d256e73d8c8f7c3e0c75799b5971776fa61a4be9",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/855e37aebe82277b4bee42b3e47ea9cf0d3b9bd1"
        },
        "date": 1719198599595,
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
            "value": 269993934,
            "unit": "KiB",
            "range": "28453741"
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
            "range": "3803718"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268448929,
            "unit": "KiB",
            "range": "7472919"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942576,
            "unit": "KiB",
            "range": "73725"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 123,
            "unit": "KiB",
            "range": "16945"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 156,
            "unit": "KiB",
            "range": "28233"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942628,
            "unit": "KiB",
            "range": "95462"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 786,
            "unit": "KiB",
            "range": "122707"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 138,
            "unit": "KiB",
            "range": "26241"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942673,
            "unit": "KiB",
            "range": "92501"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49315628,
            "unit": "KiB",
            "range": "114448"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 1086,
            "unit": "KiB",
            "range": "121779"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942569,
            "unit": "KiB",
            "range": "73582"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49314989,
            "unit": "KiB",
            "range": "188508"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2285,
            "unit": "KiB",
            "range": "196122"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41942539,
            "unit": "KiB",
            "range": "170264"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 412,
            "unit": "KiB",
            "range": "70831"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 268838225,
            "unit": "KiB",
            "range": "14790400"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885743,
            "unit": "KiB",
            "range": "55683"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 927,
            "unit": "KiB",
            "range": "123924"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 268906366,
            "unit": "KiB",
            "range": "13199001"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885906,
            "unit": "KiB",
            "range": "27796"
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
          "id": "341c664ff15bd6b3bc8ee7282f8cbdc6ad0da5e2",
          "message": "optimize Iter and push_n",
          "timestamp": "2024-06-23T20:32:57-07:00",
          "tree_id": "7e72e3d9813233aa807a4f465ff2f27391dbed77",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/341c664ff15bd6b3bc8ee7282f8cbdc6ad0da5e2"
        },
        "date": 1719200432189,
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
            "value": 269937804,
            "unit": "KiB",
            "range": "25612908"
          },
          {
            "name": "Vec: create 10,000 unique values from slice - Memory Allocated",
            "value": 41942817,
            "unit": "KiB",
            "range": "47608"
          },
          {
            "name": "Hrle: create 10,000 unique values from iter - Memory Allocated",
            "value": 752363984,
            "unit": "KiB",
            "range": "4108658"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268788422,
            "unit": "KiB",
            "range": "8806792"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942592,
            "unit": "KiB",
            "range": "96048"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 358,
            "unit": "KiB",
            "range": "47196"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 209,
            "unit": "KiB",
            "range": "58806"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942677,
            "unit": "KiB",
            "range": "92728"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 383,
            "unit": "KiB",
            "range": "38124"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 49,
            "unit": "KiB",
            "range": "10652"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942913,
            "unit": "KiB",
            "range": "25125"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49315628,
            "unit": "KiB",
            "range": "114448"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 1209,
            "unit": "KiB",
            "range": "129984"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942586,
            "unit": "KiB",
            "range": "72255"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49315945,
            "unit": "KiB",
            "range": "112324"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2096,
            "unit": "KiB",
            "range": "187660"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41942343,
            "unit": "KiB",
            "range": "178549"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 180,
            "unit": "KiB",
            "range": "29584"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 268896515,
            "unit": "KiB",
            "range": "12945723"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885384,
            "unit": "KiB",
            "range": "132272"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 785,
            "unit": "KiB",
            "range": "82113"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 268623418,
            "unit": "KiB",
            "range": "5612414"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885779,
            "unit": "KiB",
            "range": "54019"
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
          "id": "dbe2005a69a2e7f5c1033877a55d2721fd956353",
          "message": "optimize for all_unique & all_equal cases",
          "timestamp": "2024-06-23T20:46:48-07:00",
          "tree_id": "c77a9d51c899494b9aef2d8fe0d7894fdace19b8",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/dbe2005a69a2e7f5c1033877a55d2721fd956353"
        },
        "date": 1719201264784,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Hrle: create 10,000 unique values from slice - Memory Allocated",
            "value": 550843944,
            "unit": "KiB",
            "range": "1352822"
          },
          {
            "name": "Rle: create 10,000 unique values from slice - Memory Allocated",
            "value": 269777128,
            "unit": "KiB",
            "range": "24301900"
          },
          {
            "name": "Vec: create 10,000 unique values from slice - Memory Allocated",
            "value": 41942658,
            "unit": "KiB",
            "range": "59671"
          },
          {
            "name": "Hrle: create 10,000 unique values from iter - Memory Allocated",
            "value": 550863686,
            "unit": "KiB",
            "range": "332284"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268619424,
            "unit": "KiB",
            "range": "9593058"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942934,
            "unit": "KiB",
            "range": "16162"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 84,
            "unit": "KiB",
            "range": "15013"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 214,
            "unit": "KiB",
            "range": "59495"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942996,
            "unit": "KiB",
            "range": "7176"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 247,
            "unit": "KiB",
            "range": "30414"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 168,
            "unit": "KiB",
            "range": "27867"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942624,
            "unit": "KiB",
            "range": "95480"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49315700,
            "unit": "KiB",
            "range": "87310"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 1248,
            "unit": "KiB",
            "range": "133112"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942728,
            "unit": "KiB",
            "range": "56489"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49315874,
            "unit": "KiB",
            "range": "116165"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2422,
            "unit": "KiB",
            "range": "202176"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41942125,
            "unit": "KiB",
            "range": "189197"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 173,
            "unit": "KiB",
            "range": "27510"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 269099754,
            "unit": "KiB",
            "range": "19784745"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885611,
            "unit": "KiB",
            "range": "96598"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 786,
            "unit": "KiB",
            "range": "82031"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 268821332,
            "unit": "KiB",
            "range": "9463825"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885078,
            "unit": "KiB",
            "range": "212818"
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
          "id": "31df1df7df56d326748e0cd561f146e5a8ed5211",
          "message": "worst case time complexity & bench for it",
          "timestamp": "2024-06-23T21:04:27-07:00",
          "tree_id": "5d783626c1b7e971c7ae3c3113a8a790f3b91ee1",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/31df1df7df56d326748e0cd561f146e5a8ed5211"
        },
        "date": 1719202381330,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Hrle: create 10,000 unique values from slice - Memory Allocated",
            "value": 550843944,
            "unit": "KiB",
            "range": "1352822"
          },
          {
            "name": "Rle: create 10,000 unique values from slice - Memory Allocated",
            "value": 270021734,
            "unit": "KiB",
            "range": "30801155"
          },
          {
            "name": "Vec: create 10,000 unique values from slice - Memory Allocated",
            "value": 41942197,
            "unit": "KiB",
            "range": "139179"
          },
          {
            "name": "Hrle: create 10,000 unique values from iter - Memory Allocated",
            "value": 550862925,
            "unit": "KiB",
            "range": "351713"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268966210,
            "unit": "KiB",
            "range": "10658867"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942419,
            "unit": "KiB",
            "range": "112494"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 211,
            "unit": "KiB",
            "range": "36822"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 214,
            "unit": "KiB",
            "range": "59879"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942795,
            "unit": "KiB",
            "range": "51219"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 240,
            "unit": "KiB",
            "range": "30018"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 41,
            "unit": "KiB",
            "range": "10170"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942939,
            "unit": "KiB",
            "range": "13946"
          },
          {
            "name": "Hrle: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 751252938,
            "unit": "KiB",
            "range": "2751348"
          },
          {
            "name": "Rle: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 268827251,
            "unit": "KiB",
            "range": "12311488"
          },
          {
            "name": "Vec: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 41942735,
            "unit": "KiB",
            "range": "55548"
          },
          {
            "name": "Hrle: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 752334684,
            "unit": "KiB",
            "range": "2115621"
          },
          {
            "name": "Rle: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 269558802,
            "unit": "KiB",
            "range": "23814820"
          },
          {
            "name": "Vec: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 41942950,
            "unit": "KiB",
            "range": "14482"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49314998,
            "unit": "KiB",
            "range": "163643"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 853,
            "unit": "KiB",
            "range": "98612"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942873,
            "unit": "KiB",
            "range": "24814"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49315255,
            "unit": "KiB",
            "range": "179938"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2398,
            "unit": "KiB",
            "range": "208309"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41942463,
            "unit": "KiB",
            "range": "167002"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 517,
            "unit": "KiB",
            "range": "74607"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 268846637,
            "unit": "KiB",
            "range": "14278218"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885279,
            "unit": "KiB",
            "range": "139324"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 1188,
            "unit": "KiB",
            "range": "140014"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 269262260,
            "unit": "KiB",
            "range": "19677333"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885535,
            "unit": "KiB",
            "range": "106105"
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
          "id": "b2d02cf0952420be99d531d58abb1f0660fcc480",
          "message": "avoid unnecessary heap allocation",
          "timestamp": "2024-06-23T21:54:50-07:00",
          "tree_id": "73f4ff243813bd8ab655fb690da45957e8338c28",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/b2d02cf0952420be99d531d58abb1f0660fcc480"
        },
        "date": 1719205408389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Hrle: create 10,000 unique values from slice - Memory Allocated",
            "value": 550843944,
            "unit": "KiB",
            "range": "1352822"
          },
          {
            "name": "Rle: create 10,000 unique values from slice - Memory Allocated",
            "value": 270319942,
            "unit": "KiB",
            "range": "32039156"
          },
          {
            "name": "Vec: create 10,000 unique values from slice - Memory Allocated",
            "value": 41942197,
            "unit": "KiB",
            "range": "139179"
          },
          {
            "name": "Hrle: create 10,000 unique values from iter - Memory Allocated",
            "value": 550863842,
            "unit": "KiB",
            "range": "329107"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268900986,
            "unit": "KiB",
            "range": "9538091"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942538,
            "unit": "KiB",
            "range": "103261"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 211,
            "unit": "KiB",
            "range": "36822"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 206,
            "unit": "KiB",
            "range": "58799"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942677,
            "unit": "KiB",
            "range": "92728"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 242,
            "unit": "KiB",
            "range": "30094"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 49,
            "unit": "KiB",
            "range": "10726"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942970,
            "unit": "KiB",
            "range": "11621"
          },
          {
            "name": "Hrle: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 752029469,
            "unit": "KiB",
            "range": "2913057"
          },
          {
            "name": "Rle: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 269097482,
            "unit": "KiB",
            "range": "11742906"
          },
          {
            "name": "Vec: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 41942465,
            "unit": "KiB",
            "range": "105741"
          },
          {
            "name": "Hrle: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 752289553,
            "unit": "KiB",
            "range": "2277197"
          },
          {
            "name": "Rle: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 268846590,
            "unit": "KiB",
            "range": "13299359"
          },
          {
            "name": "Vec: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 41942947,
            "unit": "KiB",
            "range": "14042"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49315527,
            "unit": "KiB",
            "range": "105373"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 1044,
            "unit": "KiB",
            "range": "115510"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942635,
            "unit": "KiB",
            "range": "92655"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49314919,
            "unit": "KiB",
            "range": "198404"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2180,
            "unit": "KiB",
            "range": "198920"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41942462,
            "unit": "KiB",
            "range": "167003"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 310,
            "unit": "KiB",
            "range": "43334"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 268955079,
            "unit": "KiB",
            "range": "13631456"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885639,
            "unit": "KiB",
            "range": "95784"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 1187,
            "unit": "KiB",
            "range": "139962"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 268525974,
            "unit": "KiB",
            "range": "10233063"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885793,
            "unit": "KiB",
            "range": "51721"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "820bc43003d877e895faedc8fd9e95dd535991a3",
          "message": "small style change",
          "timestamp": "2024-06-24T05:46:00-07:00",
          "tree_id": "603966042d9c57b3ed07788bd253b004d352c7d6",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/820bc43003d877e895faedc8fd9e95dd535991a3"
        },
        "date": 1719233681241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Hrle: create 10,000 unique values from slice - Memory Allocated",
            "value": 550843944,
            "unit": "KiB",
            "range": "1352822"
          },
          {
            "name": "Rle: create 10,000 unique values from slice - Memory Allocated",
            "value": 270005687,
            "unit": "KiB",
            "range": "25326585"
          },
          {
            "name": "Vec: create 10,000 unique values from slice - Memory Allocated",
            "value": 41942846,
            "unit": "KiB",
            "range": "45917"
          },
          {
            "name": "Hrle: create 10,000 unique values from iter - Memory Allocated",
            "value": 550861705,
            "unit": "KiB",
            "range": "414011"
          },
          {
            "name": "Rle: create 10,000 unique values from iter - Memory Allocated",
            "value": 268794209,
            "unit": "KiB",
            "range": "9636971"
          },
          {
            "name": "Vec: create 10,000 unique values from iter - Memory Allocated",
            "value": 41942592,
            "unit": "KiB",
            "range": "72395"
          },
          {
            "name": "Hrle: create 10,000 equal values from slice - Memory Allocated",
            "value": 77,
            "unit": "KiB",
            "range": "13377"
          },
          {
            "name": "Rle: create 10,000 equal values from slice - Memory Allocated",
            "value": 286,
            "unit": "KiB",
            "range": "63035"
          },
          {
            "name": "Vec: create 10,000 equal values from slice - Memory Allocated",
            "value": 41942862,
            "unit": "KiB",
            "range": "45579"
          },
          {
            "name": "Hrle: create 10,000 equal values from iter - Memory Allocated",
            "value": 242,
            "unit": "KiB",
            "range": "30108"
          },
          {
            "name": "Rle: create 10,000 equal values from iter - Memory Allocated",
            "value": 159,
            "unit": "KiB",
            "range": "27353"
          },
          {
            "name": "Vec: create 10,000 equal values from iter - Memory Allocated",
            "value": 41942693,
            "unit": "KiB",
            "range": "90790"
          },
          {
            "name": "Hrle: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 752018815,
            "unit": "KiB",
            "range": "2902024"
          },
          {
            "name": "Rle: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 268749796,
            "unit": "KiB",
            "range": "12018476"
          },
          {
            "name": "Vec: create 10,000 palindrome values from slice - Memory Allocated",
            "value": 41942958,
            "unit": "KiB",
            "range": "14255"
          },
          {
            "name": "Hrle: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 752297343,
            "unit": "KiB",
            "range": "2329951"
          },
          {
            "name": "Rle: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 268461908,
            "unit": "KiB",
            "range": "2130822"
          },
          {
            "name": "Vec: create 10,000 palindrome values from iter - Memory Allocated",
            "value": 41942699,
            "unit": "KiB",
            "range": "57112"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 49315122,
            "unit": "KiB",
            "range": "148610"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 949,
            "unit": "KiB",
            "range": "101485"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from slice - Memory Allocated",
            "value": 41942475,
            "unit": "KiB",
            "range": "105549"
          },
          {
            "name": "Hrle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 49314786,
            "unit": "KiB",
            "range": "205866"
          },
          {
            "name": "Rle: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 2222,
            "unit": "KiB",
            "range": "201606"
          },
          {
            "name": "Vec: create 1,000 runs of 10 values from iter - Memory Allocated",
            "value": 41943049,
            "unit": "KiB",
            "range": "174828"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 397,
            "unit": "KiB",
            "range": "95726"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 268435701,
            "unit": "KiB",
            "range": "2326335"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from slice - Memory Allocated",
            "value": 83885918,
            "unit": "KiB",
            "range": "27492"
          },
          {
            "name": "Hrle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 1188,
            "unit": "KiB",
            "range": "140273"
          },
          {
            "name": "Rle: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 269026242,
            "unit": "KiB",
            "range": "12904040"
          },
          {
            "name": "Vec: create 5,000 runs of 2 alternating values from iter - Memory Allocated",
            "value": 83885714,
            "unit": "KiB",
            "range": "58779"
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
        "date": 1719198436323,
        "tool": "cargo",
        "benches": [
          {
            "name": "iterate 10,000 unique values/Hrle",
            "value": 283294,
            "range": "± 2343",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Rle",
            "value": 21767,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Vec",
            "value": 3269,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Hrle",
            "value": 30926,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Rle",
            "value": 22042,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Vec",
            "value": 4615,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Hrle",
            "value": 225802,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Rle",
            "value": 22404,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Vec",
            "value": 6191,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Hrle",
            "value": 34019,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Rle",
            "value": 21869,
            "range": "± 672",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Vec",
            "value": 4648,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Hrle",
            "value": 77839910,
            "range": "± 240082",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Rle",
            "value": 84070,
            "range": "± 1276",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Vec",
            "value": 73191,
            "range": "± 2160",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Hrle",
            "value": 77748250,
            "range": "± 2382743",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Rle",
            "value": 81328,
            "range": "± 6977",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Vec",
            "value": 72515,
            "range": "± 19635",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Hrle",
            "value": 104914,
            "range": "± 2216",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Rle",
            "value": 73779,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Vec",
            "value": 72278,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Hrle",
            "value": 107397,
            "range": "± 1955",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Rle",
            "value": 70631,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Vec",
            "value": 72098,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Hrle",
            "value": 126679,
            "range": "± 3952",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Rle",
            "value": 75292,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Vec",
            "value": 72457,
            "range": "± 1069",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Hrle",
            "value": 165527,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Rle",
            "value": 107149,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Vec",
            "value": 110256,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Hrle",
            "value": 80851,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Rle",
            "value": 86296,
            "range": "± 2245",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Vec",
            "value": 74791,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Hrle",
            "value": 95705,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Rle",
            "value": 93758,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Vec",
            "value": 81009,
            "range": "± 2599",
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
          "id": "855e37aebe82277b4bee42b3e47ea9cf0d3b9bd1",
          "message": "style tweak",
          "timestamp": "2024-06-23T20:02:24-07:00",
          "tree_id": "d256e73d8c8f7c3e0c75799b5971776fa61a4be9",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/855e37aebe82277b4bee42b3e47ea9cf0d3b9bd1"
        },
        "date": 1719198600867,
        "tool": "cargo",
        "benches": [
          {
            "name": "iterate 10,000 unique values/Hrle",
            "value": 278426,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Rle",
            "value": 21789,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Vec",
            "value": 3266,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Hrle",
            "value": 30941,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Rle",
            "value": 22044,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Vec",
            "value": 4580,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Hrle",
            "value": 225860,
            "range": "± 16320",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Rle",
            "value": 22343,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Vec",
            "value": 6195,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Hrle",
            "value": 34036,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Rle",
            "value": 21885,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Vec",
            "value": 4649,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Hrle",
            "value": 77723939,
            "range": "± 603801",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Rle",
            "value": 84816,
            "range": "± 1417",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Vec",
            "value": 72963,
            "range": "± 1569",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Hrle",
            "value": 77782278,
            "range": "± 317217",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Rle",
            "value": 83802,
            "range": "± 1353",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Vec",
            "value": 72332,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Hrle",
            "value": 107295,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Rle",
            "value": 73300,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Vec",
            "value": 72496,
            "range": "± 2233",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Hrle",
            "value": 107436,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Rle",
            "value": 70607,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Vec",
            "value": 72210,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Hrle",
            "value": 127797,
            "range": "± 2728",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Rle",
            "value": 75312,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Vec",
            "value": 72757,
            "range": "± 5519",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Hrle",
            "value": 165956,
            "range": "± 1465",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Rle",
            "value": 107227,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Vec",
            "value": 110199,
            "range": "± 4023",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Hrle",
            "value": 79916,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Rle",
            "value": 84903,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Vec",
            "value": 74398,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Hrle",
            "value": 95036,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Rle",
            "value": 89871,
            "range": "± 2537",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Vec",
            "value": 80503,
            "range": "± 506",
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
          "id": "341c664ff15bd6b3bc8ee7282f8cbdc6ad0da5e2",
          "message": "optimize Iter and push_n",
          "timestamp": "2024-06-23T20:32:57-07:00",
          "tree_id": "7e72e3d9813233aa807a4f465ff2f27391dbed77",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/341c664ff15bd6b3bc8ee7282f8cbdc6ad0da5e2"
        },
        "date": 1719200433061,
        "tool": "cargo",
        "benches": [
          {
            "name": "iterate 10,000 unique values/Hrle",
            "value": 29855,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Rle",
            "value": 21789,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Vec",
            "value": 6195,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Hrle",
            "value": 30275,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Rle",
            "value": 22038,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Vec",
            "value": 4730,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Hrle",
            "value": 33661,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Rle",
            "value": 22347,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Vec",
            "value": 6204,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Hrle",
            "value": 33155,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Rle",
            "value": 21876,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Vec",
            "value": 6192,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Hrle",
            "value": 85519399,
            "range": "± 155986",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Rle",
            "value": 83291,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Vec",
            "value": 69930,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Hrle",
            "value": 85518137,
            "range": "± 370428",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Rle",
            "value": 78181,
            "range": "± 2120",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Vec",
            "value": 69281,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Hrle",
            "value": 101427,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Rle",
            "value": 70414,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Vec",
            "value": 69389,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Hrle",
            "value": 104123,
            "range": "± 847",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Rle",
            "value": 67320,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Vec",
            "value": 69061,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Hrle",
            "value": 124586,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Rle",
            "value": 72156,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Vec",
            "value": 69584,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Hrle",
            "value": 170250,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Rle",
            "value": 104344,
            "range": "± 898",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Vec",
            "value": 107255,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Hrle",
            "value": 77895,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Rle",
            "value": 83818,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Vec",
            "value": 71266,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Hrle",
            "value": 100860,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Rle",
            "value": 90292,
            "range": "± 2367",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Vec",
            "value": 77881,
            "range": "± 2088",
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
          "id": "dbe2005a69a2e7f5c1033877a55d2721fd956353",
          "message": "optimize for all_unique & all_equal cases",
          "timestamp": "2024-06-23T20:46:48-07:00",
          "tree_id": "c77a9d51c899494b9aef2d8fe0d7894fdace19b8",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/dbe2005a69a2e7f5c1033877a55d2721fd956353"
        },
        "date": 1719201265852,
        "tool": "cargo",
        "benches": [
          {
            "name": "iterate 10,000 unique values/Hrle",
            "value": 29887,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Rle",
            "value": 21822,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Vec",
            "value": 3263,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Hrle",
            "value": 28291,
            "range": "± 1256",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Rle",
            "value": 22034,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Vec",
            "value": 4731,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Hrle",
            "value": 32565,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Rle",
            "value": 22373,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Vec",
            "value": 6198,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Hrle",
            "value": 30272,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Rle",
            "value": 22288,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Vec",
            "value": 4646,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Hrle",
            "value": 581031,
            "range": "± 2831",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Rle",
            "value": 85462,
            "range": "± 1350",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Vec",
            "value": 73122,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Hrle",
            "value": 645363,
            "range": "± 4284",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Rle",
            "value": 86119,
            "range": "± 3343",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Vec",
            "value": 72308,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Hrle",
            "value": 77298,
            "range": "± 830",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Rle",
            "value": 74407,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Vec",
            "value": 73099,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Hrle",
            "value": 79702,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Rle",
            "value": 70884,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Vec",
            "value": 72493,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Hrle",
            "value": 128516,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Rle",
            "value": 76104,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Vec",
            "value": 73992,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Hrle",
            "value": 170142,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Rle",
            "value": 111417,
            "range": "± 2976",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Vec",
            "value": 106619,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Hrle",
            "value": 81468,
            "range": "± 2498",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Rle",
            "value": 85623,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Vec",
            "value": 75060,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Hrle",
            "value": 101012,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Rle",
            "value": 90293,
            "range": "± 2314",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Vec",
            "value": 81661,
            "range": "± 605",
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
          "id": "31df1df7df56d326748e0cd561f146e5a8ed5211",
          "message": "worst case time complexity & bench for it",
          "timestamp": "2024-06-23T21:04:27-07:00",
          "tree_id": "5d783626c1b7e971c7ae3c3113a8a790f3b91ee1",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/31df1df7df56d326748e0cd561f146e5a8ed5211"
        },
        "date": 1719202382423,
        "tool": "cargo",
        "benches": [
          {
            "name": "iterate 10,000 unique values/Hrle",
            "value": 29793,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Rle",
            "value": 21819,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Vec",
            "value": 3269,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Hrle",
            "value": 28326,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Rle",
            "value": 22032,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Vec",
            "value": 4729,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Hrle",
            "value": 32533,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Rle",
            "value": 22324,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Vec",
            "value": 6194,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Hrle",
            "value": 30147,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Rle",
            "value": 22272,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Vec",
            "value": 4647,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Hrle",
            "value": 570237,
            "range": "± 6165",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Rle",
            "value": 84128,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Vec",
            "value": 69133,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Hrle",
            "value": 636256,
            "range": "± 3696",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Rle",
            "value": 80778,
            "range": "± 2007",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Vec",
            "value": 68465,
            "range": "± 1000",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Hrle",
            "value": 71529,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Rle",
            "value": 73280,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Vec",
            "value": 68755,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Hrle",
            "value": 73004,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Rle",
            "value": 67031,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Vec",
            "value": 68556,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from slice/Hrle",
            "value": 77910989,
            "range": "± 447132",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from slice/Rle",
            "value": 80183,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from slice/Vec",
            "value": 69758,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from iter/Hrle",
            "value": 78007400,
            "range": "± 303340",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from iter/Rle",
            "value": 85293,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from iter/Vec",
            "value": 68679,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Hrle",
            "value": 123611,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Rle",
            "value": 74350,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Vec",
            "value": 69555,
            "range": "± 1141",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Hrle",
            "value": 169073,
            "range": "± 2119",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Rle",
            "value": 105724,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Vec",
            "value": 106754,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Hrle",
            "value": 80672,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Rle",
            "value": 85071,
            "range": "± 2095",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Vec",
            "value": 71118,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Hrle",
            "value": 100617,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Rle",
            "value": 86124,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Vec",
            "value": 77104,
            "range": "± 708",
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
          "id": "b2d02cf0952420be99d531d58abb1f0660fcc480",
          "message": "avoid unnecessary heap allocation",
          "timestamp": "2024-06-23T21:54:50-07:00",
          "tree_id": "73f4ff243813bd8ab655fb690da45957e8338c28",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/b2d02cf0952420be99d531d58abb1f0660fcc480"
        },
        "date": 1719205409573,
        "tool": "cargo",
        "benches": [
          {
            "name": "iterate 10,000 unique values/Hrle",
            "value": 29762,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Rle",
            "value": 21828,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 unique values/Vec",
            "value": 3262,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Hrle",
            "value": 28345,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Rle",
            "value": 22038,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 10,000 equal values/Vec",
            "value": 4731,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Hrle",
            "value": 34017,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Rle",
            "value": 22289,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 1,000 runs of 10 values/Vec",
            "value": 6192,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Hrle",
            "value": 30144,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Rle",
            "value": 22288,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "iterate 5,000 runs of 2 alternating values/Vec",
            "value": 4647,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Hrle",
            "value": 573345,
            "range": "± 3581",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Rle",
            "value": 84259,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from slice/Vec",
            "value": 69392,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Hrle",
            "value": 630536,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Rle",
            "value": 78385,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 unique values from iter/Vec",
            "value": 68420,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Hrle",
            "value": 70982,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Rle",
            "value": 69921,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from slice/Vec",
            "value": 68341,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Hrle",
            "value": 73368,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Rle",
            "value": 66851,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 equal values from iter/Vec",
            "value": 68665,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from slice/Hrle",
            "value": 77923965,
            "range": "± 1802121",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from slice/Rle",
            "value": 80758,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from slice/Vec",
            "value": 69333,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from iter/Hrle",
            "value": 77948527,
            "range": "± 294504",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from iter/Rle",
            "value": 84414,
            "range": "± 2227",
            "unit": "ns/iter"
          },
          {
            "name": "create 10,000 palindrome values from iter/Vec",
            "value": 69047,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Hrle",
            "value": 125040,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Rle",
            "value": 72670,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from slice/Vec",
            "value": 69829,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Hrle",
            "value": 170502,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Rle",
            "value": 103685,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "create 1,000 runs of 10 values from iter/Vec",
            "value": 106719,
            "range": "± 1418",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Hrle",
            "value": 80597,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Rle",
            "value": 83274,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from slice/Vec",
            "value": 71363,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Hrle",
            "value": 99918,
            "range": "± 876",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Rle",
            "value": 86417,
            "range": "± 2397",
            "unit": "ns/iter"
          },
          {
            "name": "create 5,000 runs of 2 alternating values from iter/Vec",
            "value": 77135,
            "range": "± 211",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}