'use strict';
require('dotenv').config({ path: './config.env' })

const app = require('./express/server');

const PORT = 4000

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})