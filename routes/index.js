var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/attendee', function(req, res, next) {
  res.render('attendee', { title: 'Express' });
});

module.exports = router;
