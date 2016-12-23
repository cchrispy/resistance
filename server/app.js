var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var router = require('./routes');

const port = process.env.PORT || 8888;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/game', router);
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(port);
console.log(`Listening on 127.0.0.1:${ port }`);

