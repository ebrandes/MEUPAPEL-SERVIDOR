var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
  res.send("Hello World");
});

app.get('/users',function(req,res){
  var users = ['ebrandes','gbaptista','vtotti'];
  res.send(users);
  res.end();
});

app.listen(3000,function(){
  console.log('listen in port 3000.');
});
