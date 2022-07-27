const express = require('express')
const router = require('./src/routes/index')

const PORT = 4000

const app = express()

app.use(express.json({ extended: false }));
app.use('/api', router)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})