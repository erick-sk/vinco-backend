const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientsSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  owner: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
  },
  symptoms: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Patient', patientsSchema);
