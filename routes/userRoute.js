const express = require('express')
const router = express.Router()


router.get('/first', function (req,res) {
  res.send('user first');
})

router.get('/second', function (req,res) {
  res.send('user second');
})

module.exports = router