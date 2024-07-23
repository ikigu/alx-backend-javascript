export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    return new Error('cannont divide by 0');
  }

  return (numerator / denominator);
}
