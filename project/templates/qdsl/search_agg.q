{
  "query": { "match_all": {} },
  "aggs": {
    "pref": {
      "terms": {
        "order": {
          "_term": "asc"
        },
        "field": "prefecture",
        "size": 50
      },
      "aggs": {
        "type": {
          "terms": {
            "field": "avg_temperature_date",
            "size": 10
          }
        }
      }
    }
  }
}
