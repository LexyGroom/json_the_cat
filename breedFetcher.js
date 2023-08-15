const request = require('request');

const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
  }

  //breed not found
  if (body === '[]') {
    console.log(`Breed '${breed}' is not found!`);
  } else {
  //log breed data
    const data = JSON.parse(body);
    console.log(data);
  }
});