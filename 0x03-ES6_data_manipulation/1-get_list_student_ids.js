export default function getListStudentIds(array) {
  if (!(Array.isArray(array))) {
    return [];
  }

  const mappedArray = array.map((arrayItem) => arrayItem.id);

  return mappedArray;
}
