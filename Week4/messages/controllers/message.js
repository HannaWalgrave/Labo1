var Message = require('../models/message');

function create (req, res){

    // save a new instance of this model
    var newMessage = new Message({
        user: req.body.user,
        message: req.body.message
    });

    newMessage.save(function (err, message) {
        if (err) return console.error(err);
        res.send(message);
    });
}
module.exports.create = create;

function getAll (req, res) {
    Message.find( function(err, messages){
        if (err) return console.error(err);
        res.send(messages);
    });
}
module.exports.getAll = getAll;

function getMessageById (req,res){
    Message.findOne({_id: req.params.id}, function(err, message) {
        if (err)
            res.send(err);
        res.json(message);
    });

}

module.exports.getMessageById = getMessageById;

function getMessageByUser(req, res){
    Message.find({user:req.params.user}, function(err, message) {
        if (err)
            res.send(err);
        res.json(message);
    });
}

module.exports.getMessageByUser = getMessageByUser;

function updateMessage(req, res){
    Message.update({_id: req.params.id}, {$set:{message:req.body.message}}, function(err, message) {
        if (err)
            res.send(err);
        res.json({ message: 'Boodschap is bijgewerkt' });

    });
}

module.exports.updateMessage = updateMessage;

function deleteMessage(req, res){
    Message.remove({_id: req.params.id}, function(err, message){
        if(err)
            res.send(err);
        res.json({message:'uw boodschap werd verwijderd'});
    })
}

module.exports.deleteMessage = deleteMessage;
