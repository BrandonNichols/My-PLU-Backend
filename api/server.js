const express = require("express");
const cors = require("cors");
const server = express();
const produceRoute = require("../auth/plu/plu-router");

server.use(express.json());
server.use(cors());
server.use("/api/produce", produceRoute);

server.get("/", (req, res) => {
  res.send("GET / Server base");
});

module.exports = server;
