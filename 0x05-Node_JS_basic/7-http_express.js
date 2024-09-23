const express = require('express');

const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(filePath) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let response = '';
        const lines = data.toString().split('\n');

        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        const numberOfStudents = length - 1;
        response += `Number of students: ${numberOfStudents}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            response += `Number of students in ${key}: ${value}. `;
            response += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(response);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((response) => {
    res.send(['This is the list of our students', response].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

module.exports = app;
