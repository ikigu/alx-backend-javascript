export default function getStudentsByLocation(studentsList, city) {
  const studentsByCity = studentsList.filter((student) => student.location === city);

  return studentsByCity;
}
