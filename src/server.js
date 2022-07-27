const express = require('express')
const router = require('./routes')
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const PORT = 8080

const app = express()
app.use(bodyParser.json());

app.use('/.netlify/functions/server', router)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})

module.exports = app;
module.exports.handler = serverless(app);