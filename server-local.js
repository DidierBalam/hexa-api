'use strict';
require('dotenv').config({ path: './config.env' })

const dbo = require('./db/conn')
const app = require('./server');

const PORT = 4000

app.listen(PORT, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log('Servidor corriendo en el puerto', PORT)
})