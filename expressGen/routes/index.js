var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/choosecolor',function(req,res,next){
    res.render("choosecolor")
});

router.get('/showcolor',function(req,res,next){
    res.render("showcolor")
});

module.exports = router;
