const http = require('http');
const { URL } = require('url');
const handleQuoteRoutes = require('./routes/quoteRoutes');

const PORT = 5000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    handleQuoteRoutes(req, res, url);
});

server.listen(PORT, () => {
  console.log(`🚀 DevQuotes API running at http://localhost:${PORT}`);
});