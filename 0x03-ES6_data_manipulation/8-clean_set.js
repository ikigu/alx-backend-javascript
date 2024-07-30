export default function cleanSet(set, startString) {
  if (!set || startString === '' || !(set instanceof Set) || typeof startString !== 'string') {
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
