
'use strict';

const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.json());
// app.use('/api', router)

app.use('/.netlify/functions/server', router)

// app.listen(PORT, () => {
//     dbo.connectToServer(function (err) {
//         if (err) console.error(err);
//     });
//     console.log('Servidor corriendo en el puerto', PORT)
// })
module.exports = app;
module.exports.handler = serverless(app);
