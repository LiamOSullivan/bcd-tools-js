var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'BCD  Default Project Template' })
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('multiline-chart', { title: 'BCD  Multiline Chart' })
})

module.exports = router
