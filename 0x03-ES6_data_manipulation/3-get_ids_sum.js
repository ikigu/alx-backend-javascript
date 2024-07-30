export default function getStudentIdsSum(studentsList) {
  const sumIds = studentsList.reduce((accumulator, student) => accumulator + student.id, 0);

  return sumIds;
}
