var express    = require("express");
var parser     =require("body-parser")
var mongoose   = require("./db/connection")
var app        = express();

var Contributor= mongoose.model("Contributor");

app.use(parser.json({urlencoded: true}));

app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/contributors", function(req,res){
  Contributor.find().then(function(contributors){
    res.json(contributors)
  })
});

app.post("/api/contributors", function(req, res){
  console.log(req.body);
  Contributor.create(req.body).then(function(product){
  res.json(req.body);
});
});

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3001, function (){
  console.log("I'm working");
});
