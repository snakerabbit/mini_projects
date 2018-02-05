var express = require('express');
var app = express();

app.get('/:id([0-9]{3})', function(req, res){
  res.send('The id you specified is ' + req.params.id);
});

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);
