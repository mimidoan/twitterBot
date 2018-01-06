const Twit = require('twit');
const request = require('request');
const keys = require('./keys');


// create a new TWIT obj to connect to your account
const TWIT = new Twit({
  consumer_key: keys.API_KEY,
  consumer_secret: keys.SECRET_KEY,
  access_token:  keys.ACCESS_TOKEN,
  access_token_secret: keys.ACCESS_SECRET
});

/*======== API for testing account connection/posting ===========================================================

======================================================================================================*/

const quoteURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=text&lang=en';

// issue a request to the api to get quote
const getQuote = new Promise(function(fulfill, reject){
  request(quoteURL, function(err, res, body) {
    err ? reject(err) : fulfill(body);
  });
});

// post the quote to twitter
function postTweet(tweet) {
  console.log(tweet);

  // user Twit Post strategy
  // TWIT.post('statuses/update', {status: tweet}, function(err, data, res) {
  //   console.log('$$$$$$ DATA', data);
  //   // console.log('$$$$$$ RESPONSE', res);
  // });

  TWIT.post('statuses/update', {status: 'hello world'}, function(err, data, res) {
    console.log('$$$$$$ DATA', data);
    // console.log('$$$$$$ RESPONSE', res);
  });
}

// call the promise and catch any errors
getQuote.then(postTweet)
        .catch(console.log)
