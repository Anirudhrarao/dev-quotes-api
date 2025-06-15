const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'data', 'quotes.json');

function getAllQuotes() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

function getQuotesByTag(tag) {
  const allQuotes = getAllQuotes();
  return allQuotes.filter(q => q.tag.toLowerCase() === tag.toLowerCase());
}


module.exports = {
    getAllQuotes,
    getQuotesByTag
};