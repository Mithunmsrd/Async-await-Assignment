const axios = require('axios');
async function fetchDataWithRetry(url, maxRetries = 3) {
  try {
    let retries = 0;

    while (retries < maxRetries) {
      try {
       
        const response = await axios.get(url);

        
        return response.data;
      } catch (error) {
        console.error(`Attempt ${retries + 1} failed:`, error.message);
        retries++;
      }
    }

    throw new Error(`Failed to fetch data from ${url} after ${maxRetries} attempts`);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; 
  }
}


const url = 'https://jsonplaceholder.typicode.com/posts/1';

console.log('Fetching data with retries...');
fetchDataWithRetry(url)
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
