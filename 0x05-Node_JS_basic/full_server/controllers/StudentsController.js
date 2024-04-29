const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const printData = [];
        printData.push('This is the list of our students');
        for (const field in data) {
          if (field) printData.push(`Number of students in ${field}: ${data[field].number}. ${data[field].list}`);
        }
        response.send(printData.join('\n'));
      })
      .catch((err) => { response.send(err.message); });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['SWE', 'CS'].includes(request.params.major)) response.status(500).send('Major parameter must be CS or SWE');
    else {
      readDatabase(process.argv[2])
        .then((data) => {
          if (Object.keys(data).length > 0) response.send(data[request.params.major].list);
          response.send(500, 'Cannot load the database');
        })
        .catch((err) => { response.send(err.message); });
    }
  }
}

module.exports = StudentsController;
