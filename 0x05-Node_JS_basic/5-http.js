const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((response) => {
      const outString = response.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
