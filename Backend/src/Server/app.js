const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const codeRoutes = require("./Server/routes/codeRoutes");
const errorHandler = require("./Server/middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/code", codeRoutes);

app.use(errorHandler);

module.exports = app;
