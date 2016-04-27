var express    = require("express");
var mongoose   = require("./db/connection")
var app        = express();

var Contributor= mongoose.model("Contributor");

app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/contributors", function(req,res){
  Contributor.find().then(function(contributors){
    res.json(contributors)
  })
});

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3001, function (){
  console.log("I'm working");
});
