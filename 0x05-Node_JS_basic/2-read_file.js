const fs = require('fs');

function countStudents(path) {
  try {
    const results = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);
    const lines = results;
    let i = 0;
    let countStudents = 0;
    const fields = {};

    for (const line of lines) {
      if (line.trim() !== '' && i > 0) {
        countStudents += 1;
        const [fname, lname, age, field] = line.split(','); // eslint-disable-line
        if (!fields[field]) {
          fields[field] = {
            count: 1,
            students: [fname],
          };
        } else {
          const newCount = fields[field].count + 1;
          const newStudents = (fields[field].students).concat(fname);
          fields[field] = {
            count: newCount,
            students: newStudents,
          };
        }
      }
      i += 1;
    }

    console.log(`Number of students: ${countStudents}`);
    for (const field of Object.keys(fields)) {
      const n = fields[field].count;
      const names = fields[field].students.join(', ');
      console.log(`Number of students in ${field}: ${n}. List: ${names}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
