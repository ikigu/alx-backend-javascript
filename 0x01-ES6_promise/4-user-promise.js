export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve({ firstName, lastName });

    if (!firstName || !lastName) {
      reject(new Error());
    }
  });
}
