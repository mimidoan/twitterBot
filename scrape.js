//  cheerio lib for web scraping
const cheerio = require('cheerio');
const request = require('request');

// issue a request to the webpage
const scrape = new Promise((fulfill, reject) => {
  const url = `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${9}&src=hp-gem`;
  request(url, function(err, res, body) {
    err ? reject(err) : fulfill(body);
  });
});


function parseRequest(body) {
  const $ = cheerio.load(body);
  const load = $(`.horoscope-content p`).text();
  console.log(load);
}



scrape.then(parseRequest)
      .catch(console.log);
