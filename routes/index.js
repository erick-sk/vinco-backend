const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

module.exports = function () {
  // add new patients via POST
  router.post('/patients', patientController.newCustomer);

  return router;
};
