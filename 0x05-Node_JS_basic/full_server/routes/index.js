const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const app = express();

app.get('/', ((request, response) => AppController.getHomepage(request, response)));
app.get('/students', ((request, response) => StudentsController.getAllStudents(request, response)));
app.get('/students/:major', ((request, response) => StudentsController.getAllStudentsByMajor(request, response)));

module.exports = app;
