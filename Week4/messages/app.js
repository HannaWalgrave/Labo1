var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Messages');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routers/index'));
app.use('/messages', require('./routers/messages'));



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});