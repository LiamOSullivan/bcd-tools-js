var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'BCD  Default Project Template' })
})

/* Links to examples */
router.get('/multiline-chart', function (req, res, next) {
  res.render('multiline-chart', { title: 'BCD  Multiline Chart' })
})

router.get('/svg-map', function (req, res, next) {
  res.render('svg-map', { title: 'BCD Interactive SVG Map' })
})

module.exports = router
