var express = require('express');
var request = require('request');
var url = require('url');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build'));

app.use('/api/', _proxy_to_api);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function _proxy_to_api(req, res, next) {
  console.log('hi');
  var host = 'http://boneyard-server.heroku.com/';
  //var api_url = url.resolve(host, req.path);
  //request(api_url).pipe(res);
}

