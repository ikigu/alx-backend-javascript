export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      // When the Promise resolves successfully
      console.log('Got a response from the API');
      return { status: 200, body: 'success' }; // Return the object
    })
    .catch(() => {
      return new Error();
    });
}
