export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      // When the Promise resolves successfully
      console.log('Got a response from the API');
      return { status: 200, body: 'success' }; // Return the object
    })
    .catch(() => {
      // When the Promise is rejected
      console.log('Got a response from the API');
      return new Error(); // Return an empty Error object
    })
    .finally(() => {
      // This runs in both success and failure cases
      console.log('Got a response from the API');
    });
}
