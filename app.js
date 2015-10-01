var express = require('express');
var app = express();
app.use('/', express.static('./'));
app.use('/davis-list', function(req, res){
	res.json(require('./api/davis-list.json'));
});
var server = app.listen(5000, function() {
  console.log('Listening on port %d', server.address().port);
});
