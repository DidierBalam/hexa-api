const express = require('express')
const router = require('./routes')

const PORT = 8080

const app = express()

app.use('/api', router)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})

module.exports = app
