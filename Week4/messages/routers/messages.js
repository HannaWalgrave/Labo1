var express = require('express');
var router = express.Router();
var controller = require('../controllers/message')
var Message = require('../models/message');
var mongoose = require('mongoose');

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/output', controller.getAll);
router.post('/', controller.create);
router.get('/output', controller.getAll);
router.get('/:id', controller.getMessageById);
router.get('/user/:user', controller.getMessageByUser);
router.put('/:id', controller.updateMessage);
router.delete('/:id', controller.deleteMessage);

module.exports = router;