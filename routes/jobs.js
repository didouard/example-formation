var express = require('express');
var router = express.Router();

/* GET jobs listing. */
router.get('/', function(req, res, next) {
  res.send({job: ['job1', 'job2', 'job3']});
});

module.exports = router;
