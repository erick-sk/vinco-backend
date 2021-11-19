const Patient = require('../models/Patient');

// when a new customer is created
exports.newCustomer = async (req, res, next) => {
  // create object of patient with data from req.body
  const patient = new Patient(req.body);

  try {
    await patient.save();
    res.json({
      message: 'Customer was successfully added',
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

// get all patients
exports.getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find({});
    res.json(patients);
  } catch (error) {
    console.log(error);
    next();
  }
};

// get a single patient (ID)
exports.getPatient = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
};

// update a record by (ID)
exports.updatePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
};

// delete a record by (ID)
exports.deletePatient = async (req, res, next) => {
  try {
    await Patient.findOneAndDelete(req.params.id);
    res.json({ message: 'Deleted patient!' });
  } catch (error) {
    console.log(error);
    next();
  }
};
