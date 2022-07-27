const express = require('express')
const router = express.Router()

router.route('/states').get((_, res) => {
  const states = require('../database/states.json')
  try {
    res.send(states)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

// router.route('/mayoralties/:id').get((req, res) => {
//   const mayoralties1 = require('../database/mayoralties1.json')
//   const mayoralties2 = require('../database/mayoralties02.json')
//   try {
//     const { id } = req.params
//     const features = mayoralties1.features.concat(mayoralties2.features)
//     const filter = features.filter(data => data.properties.CVE_ENT === id)
//     res.send(filter)
//   } catch (err) {
//     console.log(err)
//     res.send(err)
//   }
// })

module.exports = router