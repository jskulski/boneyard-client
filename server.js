var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

var app = express();

app.set('port', (process.env.PORT || 4999));
app.use(express.static(__dirname + '/build'));

//var api_base = 'http://boneyard-server.heroku.com';
var api_base = 'http://localhost:5000';

app.use('/api', proxy(api_base));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

