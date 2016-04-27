var express    = require("express");
var app        = express();

app.get("/", function(req, res){
  res.send("In business");
});

app.listen(3001, function (){
  console.log("I'm working");
});
