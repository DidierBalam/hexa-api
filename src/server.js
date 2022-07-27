const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express();
app.use(bodyParser.json());

app.use(`/.netlify/functions/server`, router);

module.exports = app;
module.exports.handler = serverless(app);