const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    if (body === '[]') {
      return callback(null, null);
    } else {
      const data = JSON.parse(body);
      return callback(null, data);
    }
  });
};

module.exports = {fetchBreedDescription};