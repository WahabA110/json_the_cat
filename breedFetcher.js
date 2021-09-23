const request = require('request');

const input = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, function(error, response, body) {
  // console.error('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);

  const data = JSON.parse(body);

  const description = data[0].description;

  console.log(description);

});
