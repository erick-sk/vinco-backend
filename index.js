const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// create server
const app = express();

// MongoDB connection
const database = process.env.MONGODB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.log(error));

// port
const PORT = process.env.PORT || 4000;

// server running...
app.listen(PORT, console.log(`Server has started at port: ${PORT}`));
