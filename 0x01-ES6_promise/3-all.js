import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      console.log(
        `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
