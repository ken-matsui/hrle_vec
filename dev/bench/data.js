window.BENCHMARK_DATA = {
  "lastUpdate": 1719054188092,
  "repoUrl": "https://github.com/ken-matsui/hrle_vec",
  "entries": {
    "Benchmark": [
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
          "id": "1553537a28182fa032adb1611a0c895e3a5511b8",
          "message": "fix unrecognized option error",
          "timestamp": "2024-06-22T04:01:44-07:00",
          "tree_id": "880e1002ad50af0f30d03a78614004c88427cbf6",
          "url": "https://github.com/ken-matsui/hrle_vec/commit/1553537a28182fa032adb1611a0c895e3a5511b8"
        },
        "date": 1719054187824,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create 10_000 unique values from slice/Hrle/",
            "value": 77554983,
            "range": "± 245304",
            "unit": "ns/iter"
          },
          {
            "name": "Create 10_000 unique values from slice/Vec/",
            "value": 828,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Create 10_000 unique values from iter/Hrle/",
            "value": 77531251,
            "range": "± 1032816",
            "unit": "ns/iter"
          },
          {
            "name": "Create 10_000 unique values from iter/Vec/",
            "value": 812,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}