const axios = require('axios');
async function fetchDataFromUrls(urls) {
  try {
    const responseTimes = [];

    for (const url of urls) {
      const startTime = performance.now(); 

      const response = await axios.get(url);

      const endTime = performance.now(); 

      const responseTime = endTime - startTime; 
      responseTimes.push({ url, responseTime });

      console.log(`Response time for ${url}: ${responseTime.toFixed(2)} milliseconds`);
    }

    return responseTimes; 
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; 
  }
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

console.log('Fetching data from URLs...');
fetchDataFromUrls(urls)
  .then(responseTimes => {
    console.log('Response times:', responseTimes);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
