const express = require('express')
const router = express.Router()

const dbo = require('../db/conn');

router.route('/states/:page').get((req, res) => {
  try {
    dbo.connectToServer(function (err) {
      if (err) console.error(err);

      const { page } = req.params
      console.log('buscando', page)
      let db_connect = dbo.getDb()
      const skip = 3 * (parseInt(page) - 1)
      db_connect
        .collection("states")
        .find({})
        .skip(skip)
        .limit(3)
        .toArray(function (err, result) {
          if (err) throw err;
          console.log('resolviendo')
          res.json(result);
        });
    })


  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router