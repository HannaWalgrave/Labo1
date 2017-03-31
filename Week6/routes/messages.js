var express = require('express');
var router = express.Router();
var schema = mongoose.schema;

var messageschema = new schema({
    message:String
})

var message = mongoose.model('message',messageschema);

router.get('/get',function(req,res){
    res.send('Getting messages')
});

router.post('/create',function(req,res){
    //save msg
    var m = new message();
    m.message = "hi mongodb";
    m.save(function(err,doc){
        res.send(doc)
    })
});

router.get('/get:id',function(req,res){
    res.send('Getting message' + req.params.id);
});

module.exports = router;