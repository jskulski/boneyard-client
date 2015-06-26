var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build'));

app.get('/api/*', function(request, response) {
  response.send('proxy');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
