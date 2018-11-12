var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('FrontEnds/PageContact/index');
	// res.send('GET request to the contact')
});
router.get('/detail', function(req, res, next) {
	res.send('GET request to the detail')
  // res.render('FrontEnds/Contact/contact');
});

module.exports = router;
