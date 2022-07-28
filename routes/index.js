const express = require('express')
const router = express.Router()

const connectToDatabase = require('../db/conn');

router.route('/states/:page').get( async (req, res) => {
  try {
    const { page } = req.params
    console.log('buscando', page)
    const skip = 3 * (parseInt(page) - 1)
    let { db_connect } = await connectToDatabase()
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
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router