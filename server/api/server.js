const personelRoute = require("./Routes/PersonelRoutes/personel-router");
const envanterRoute = require("./Routes/EnvanterRoutes/envanter-router");
const merkezRoute = require("./Routes/MerkezRoutes/merkez-router");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.use("/api/", personelRoute);
server.use("/api/", envanterRoute);
server.use("/api/", merkezRoute);

module.exports = server;