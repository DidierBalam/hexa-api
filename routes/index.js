const express = require('express')
const router = express.Router()

const dbo = require('../db/conn');

router.route('/states/:page').get(async (req, res) => {
  try {
    const { page } = req.params
    const { db_connect, client } = await dbo.getDb()
    const skip = 3 * (parseInt(page) - 1)

    const states = await db_connect
      .collection("states")
      .find({})
      .skip(skip)
      .limit(1)
      .toArray()

    client.close()
    res.send(states)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

module.exports = router