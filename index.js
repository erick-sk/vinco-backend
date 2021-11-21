const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes');
const cors = require('cors');

// create server
const app = express();

// enable cors
const whitelist = [process.env.WHITELIST];
const corsOptions = {
  origin: (origin, callback) => {
    const exist = whitelist.some((domain) => domain === origin);
    if (exist) {
      callback(null, true);
    } else {
      callback(new Error('No allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

// MongoDB connection
const database = process.env.MONGODB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.log(error));

// body parser
app.use(express.urlencoded({ extended: false }));

// req.body parser json
app.use(express.json());

// enable routes
app.use('/', routes());

// port
const PORT = process.env.PORT || 4000;

// server running...
app.listen(PORT, console.log(`Server has started at port: ${PORT}`));
