const express = require('express')
const router = express.Router()


router.get('/first', function (req,res) {
  res.send('item first');
})

router.get('/second', function (req,res) {
  res.send('item second');
})

module.exports = router