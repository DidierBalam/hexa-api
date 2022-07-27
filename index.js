const express = require('express')

const PORT = 8080

const app = express()

const router = express.Router()

router.route('/states').get((_, res) => {
  const states = require('./src/database/states.json')
  try {
    res.send(states)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})

module.exports = app
