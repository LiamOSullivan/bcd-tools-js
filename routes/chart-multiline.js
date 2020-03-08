var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('multiline-chart', { title: 'BCD  Multiline Chart' })
})

module.exports = router
