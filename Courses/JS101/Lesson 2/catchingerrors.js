function parseJSON(data) {
  let result;
  try {
    result = JSON.parse(data); // Throws an exception if 'data' is invalid
  } catch (err) { // Run this code even if JSON.parse throws an exception.
    console.log(`There was a ${err.name} parsing JSON data: ${err.message}`);
    result = null;
  } finally { // Runs whether JSON.parse succeeds or fails
    console.log('Finished parsing data');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);
