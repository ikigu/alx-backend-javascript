export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const gradeMap = new Map(newGrades.map((entry) => [entry.studentId, entry.grade]));

  const filteredStudents = studentList.filter((student) => student.location === city);

  const updatedStudents = filteredStudents.map((student) => {
    const newGrade = gradeMap.get(student.id) || 'N/A'; // Look up grade, default to 'N/A'
    return {
      ...student, // Copy existing student properties
      grade: newGrade, // Add/update grade
    };
  });

  return updatedStudents;
}
