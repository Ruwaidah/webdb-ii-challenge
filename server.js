const express = require("express");
const server = express();
server.use(express.json());

const carsRouter = require("./cars/carsRouter");
const router = express.Router();

module.exports = server;
