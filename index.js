const express = require('express');
const server = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));