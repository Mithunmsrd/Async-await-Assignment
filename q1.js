
async function fetchDataWithTimeout(url, timeout) {
 const fetchDataPromise = fetch(url);

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Timeout occurred'));
      }, timeout);
    });
  
    try {
     
      const response = await Promise.race([fetchDataPromise, timeoutPromise]);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error; 
    }
  }

  const apiUrl = 'https://api.example.com/data';
  const timeoutDuration = 5000; 
  
  fetchDataWithTimeout(apiUrl, timeoutDuration)
    .then(data => {
      console.log('Data fetched successfully:', data);
     
    })
    .catch(error => {
     console.error('Error fetching data:', error.message);
    });
  