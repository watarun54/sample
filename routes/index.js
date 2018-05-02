var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var a = req.body.a;
  var b = req.body.b;
  var c = a + b;
  var params = {
    "c":c
  }
  res.json(params);
})


module.exports = router;
