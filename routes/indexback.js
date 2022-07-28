const express = require('express')
const router = express.Router()

// router.route(`/states/:page`).get((req, res) => {
//   try {
//     const { page } = req.params

//     const states = require('../database/states.json')
//     const count = parseInt(page)

//     const init = 3 * (page - 1)
//     const last = 3 * count

//     console.log('position', init, last)

//     res.send(states.features.slice(init, last))
//   } catch (err) {
//     console.log(err)
//     res.send(err)
//   }
// })

// router.route('/mayoralties/:id').get((req, res) => {
//   try {
//     const { id } = req.params
//     const mayoralties1 = require('../database/mayoralties1.json')
//     const mayoralties2 = require('../database/mayoralties02.json')
//     const features = mayoralties1.features.concat(mayoralties2.features)
//     const filter = features.filter(data => data.properties.CVE_ENT === id)
//     res.send(filter)
//   } catch (err) {
//     console.log(err)
//     res.send(err)
//   }
// })
const dbo = require('../db/conn');

router.route('/states').post((_, res) => {
  try {
    let db_connect = dbo.getDb("hexa");
    const states = require('../db/states.json')
    const features = states.features
    console.log('iniciando')
    db_connect.collection("states").insertMany(features, function (err, res) {
      if (err) throw err;
      console.log('terminó')
      res.json(res);
    });
    // db_connect
    //   .collection("states")
    //   .find({})
    //   .toArray(function (err, result) {
    //     if (err) throw err;
    //     res.json(result);
    //   });
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router