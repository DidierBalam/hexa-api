require('dotenv').config({ path: './config.env' })

const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
// const dbo = require('./db/conn')

const PORT = 4000
const app = express()

app.use(cors())
app.use(express.json());
app.use('/api', router)

app.listen(PORT, () => {
    // dbo.connectToServer(function (err) {
    //     if (err) console.error(err);
    // });
    console.log('Servidor corriendo en el puerto', PORT)
})

