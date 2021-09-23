const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
  
    try {const data = JSON.parse(body);
    const desc = data[0].description;

    return callback(null, desc);
    }
    catch (error) {
      callback(error.message, null);
    }

  });

};

module.exports = { fetchBreedDescription };