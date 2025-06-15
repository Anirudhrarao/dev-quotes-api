const { getAllQuotes, getQuotesByTag } = require('../services/quoteService');
const getRandomItem = require('../utils/random');


function handleQuoteRoutes(req, res, url) {
    const pathname = url.pathname;
    const tag = url.searchParams.get('tag');

    // GET /quotes or /quotes?tag=xyz
    if (pathname === '/quotes' && req.method === 'GET') {
        let quotes = getAllQuotes();
        if (tag) quotes = getQuotesByTag(tag);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(quotes));
    }

    // GET /quotes/random
    else if (pathname === '/quotes/random' && req.method === 'GET') {
        const randomQuote = getRandomItem(getAllQuotes());
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(randomQuote))
    }

    // Fallback for all other routes
    else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
}

module.exports = handleQuoteRoutes;