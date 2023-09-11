# Benchmarking Go vs. Node.js

This repository contains benchmark results comparing the performance of a simple HTTP server implemented in Go and Node.js. The goal is to showcase the capabilities of Go as a backend language.

## System Specifications

- **CPU**: Apple M1 Pro (10 cores)
- **Memory**: 16 GB
- **OS**: macOS 13.4

## Code Locations

- **Go**: [`http_server.go`](./http_server.go)
- **Node.js**: [`http_server.js`](./http_server.js)

## Benchmarking Tool & Commands

- **Tool**: `hey`
- **Commands**:
  - Go: `hey -n 300000 -c 400 -z 30s http://localhost:8080/`
  - Node.js: `hey -n 300000 -c 400 -z 30s http://localhost:8081/`

## Results

| Metric                   | Go               | Node.js          |
|--------------------------|------------------|------------------|
| Requests/sec             | 73,248           | 57,127           |
| Average Response Time    | 12 ms            | 12 ms            |
| 90% Latency              | 7.1 ms           | 8.2 ms           |
| Slowest Response Time    | 111.1 ms         | 74.6 ms          |
| Errors (Percentage)      | 285 (0.0285%)    | 395 (0.0395%)    |

## Insights

Both Go and Node.js servers demonstrated impressive performance under high load. Go showcased a higher throughput and slightly better latency distribution, making it a compelling choice for backend development. However, it's essential to note that both languages are capable of handling high loads efficiently. The choice between them would depend on various factors, including the development ecosystem, existing expertise, and specific use cases.

## Conclusion

Go, with its performance characteristics and simplicity, proves to be an excellent choice for backend development, especially when handling high concurrency and throughput is a priority.
