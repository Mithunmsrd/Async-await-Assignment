/
async function doubleNumberWithDelay(number) {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    return number * 2;
  }
 
  async function processArrayWithDelay(numbers) {
    try {
      const doubledNumbers = [];
  
      for (const number of numbers) {
        const doubled = await doubleNumberWithDelay(number);
        doubledNumbers.push(doubled);
      }
  
      return doubledNumbers;
    } catch (error) {
      console.error('Error processing array:', error.message);
      throw error; 
    }
  }

  const numbers = [1, 2, 3, 4, 5];
  
  console.log('Processing started...');
  processArrayWithDelay(numbers)
    .then(doubledNumbers => {
      console.log('Processed array:', doubledNumbers);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  