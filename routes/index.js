const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

module.exports = function () {
  // add new patients via POST
  router.post('/patients', patientController.newCustomer);

  // get all records of patients from database
  router.get('/patients', patientController.getPatients);

  return router;
};
