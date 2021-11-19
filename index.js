const express = require("express");

// create server
const app = express();

// port
const PORT = process.env.PORT || 4000;

// server running...
app.listen(PORT, console.log(`Server has started at port: ${PORT}`));
