// const express = require("express");
// const serverless = require("serverless-http");
// const bodyParser = require('body-parser')
// const router = require('./routes')

// const app = express();
// app.use(bodyParser.json());

// // app.use(`/.netlify/functions/server`, router);

// module.exports = app;
// // module.exports.handler = serverless(app);

const express = require('express')
const router = require('./routes')

const PORT = 8080

const app = express()

app.use('/api', router)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})

module.exports = app
