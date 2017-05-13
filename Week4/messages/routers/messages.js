var express = require('express');
var router = express.Router();
var controller = require('../controllers/message')
var Message = require('../models/message');
var mongoose = require('mongoose');

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/:id', function (req, res) {
    var id = req.params.id;
    res.send("GET message with :id " + id);
});

router.post('/output', controller.getAll);
router.post('/', controller.create);


module.exports = router;