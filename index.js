const {fetchBreedDescription} = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (error, data) => {
  if (error) {
    console.log('Error:', error);
  } else {
    if (data) {
      console.log(data);
    } else {
      console.log(`Breed '${breed}' is not found!`);
    }
  }
});