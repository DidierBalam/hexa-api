const express = require('express')
const router = express.Router()

// const mayoralties1 = require('../database/mayoralties1.json')
// const mayoralties2 = require('../database/mayoralties02.json')


router.route('/states').get((_, res) => {
  try {
    const states = require('../database/states.json')
    const count = states.features.length / 32
    console.log(count)
    res.send(states.features.slice(0,count))
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.route('/mayoralties/:id').get((req, res) => {
  try {
    const { id } = req.params
    // const features = mayoralties1.features.concat(mayoralties2.features)
    // const filter = features.filter(data => data.properties.CVE_ENT === id)
    res.send('hola')
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router