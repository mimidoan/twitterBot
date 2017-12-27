const cheerio = require('cheerio');
const request = require('request');


const scrape = new Promise((fulfill, reject) => {
  const url = `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${9}&src=hp-gem`;
  request(url, function(err, res, body) {
    err ? reject(err) : fulfill(body);;
  });
});


function parseRequest(body) {
  const $ = cheerio.load(body);

  // $('.horoscope-content').filter(function() {
  //   console.log(this)
  // })
  console.log($(`.horoscope-content p`).text());
  // console.log(body);
}



scrape.then(parseRequest)
     .catch(console.log);
