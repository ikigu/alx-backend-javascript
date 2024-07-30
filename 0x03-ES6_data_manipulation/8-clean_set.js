export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const returnString = [];

  set.forEach((setItem) => {
    if (setItem.startsWith(startString)) {
      returnString.push(setItem.slice(startString.length));
    }
  });

  return returnString.join('-');
}
