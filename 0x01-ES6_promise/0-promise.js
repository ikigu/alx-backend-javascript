export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      resolve('Success');
    }
    if (!condition) {
      reject(new Error('Failure'));
    }
  });
}
