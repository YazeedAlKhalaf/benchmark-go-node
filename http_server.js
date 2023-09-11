const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url !== "/") {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

const PORT = 8081;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
