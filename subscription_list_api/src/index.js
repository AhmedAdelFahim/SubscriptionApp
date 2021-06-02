"use strict";

require('dotenv').config();
const { app } = require("./loaders/index");
const PORT = process.env.PORT;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  }); 
};

startServer();
