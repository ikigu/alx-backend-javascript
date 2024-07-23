import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const object = {};

  try {
    object.user = await createUser();
    object.photo = await uploadPhoto();
  } catch (e) {
    object.user = null;
    object.photo = null;
  }

  return object;
}
