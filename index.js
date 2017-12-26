const Twit = require('twit');
const request = require('request');
const keys = require('./keys');

const TWIT = new Twit({
  consumer_key: keys.API_KEY,
  consumer_secret: keys.SECRET_KEY,
  access_token:  keys.ACCESS_TOKEN,
  access_token_secret: keys.ACCESS_SECRET
});


const quoteURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=text&lang=en';


const getQuote = new Promise(function(fulfill, reject){
  request(quoteURL, function(err, res, body) {
    if(err) {
      reject(err);
    } else {
      fulfill(body);
    }
  });
});

function postTweet(tweet) {
  console.log(tweet);
  TWIT.post('statuses/update', {status: tweet}, function(err, data, res) {
    console.log('$$$$$$ DATA', data);
    console.log('$$$$$$ RESPONSE', res);
  });
}


getQuote.then(postTweet)
        .catch(console.log)
