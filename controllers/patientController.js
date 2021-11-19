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
