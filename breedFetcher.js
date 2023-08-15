const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    if (body === '[]') {
      return callback(null, null);
    } else {
      let data = JSON.parse(body);
      data = data[0].description;
      return callback(null, data);
    }
  });
};

module.exports = {fetchBreedDescription};