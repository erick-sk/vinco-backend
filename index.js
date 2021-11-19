const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes');

// create server
const app = express();

// MongoDB connection
const database = process.env.MONGODB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.log(error));

// enable routes
app.use('/', routes());

// port
const PORT = process.env.PORT || 4000;

// server running...
app.listen(PORT, console.log(`Server has started at port: ${PORT}`));
