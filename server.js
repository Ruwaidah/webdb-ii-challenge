const express = require("express");
const server = express();
server.use(express.json());

const carsRouter = require("./cars/carsRouter");

server.use("/cars", carsRouter);

server.get("/", (req, res) => {
  res.send("<h1>Wellcome</h1>");
});

module.exports = server;
