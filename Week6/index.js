
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodedemo');

var app = express();

app.use("/message/",require("./routes/index"));
app.use("/",require('./routes/index'));




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});