var express    = require("express");
var app        = express();


app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/contributors", function(req,res){
  res.json([
      {name:"Nikki"},
      {name:"Yasmin"},
      {name:"Wayne"}
    ]);
});

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3001, function (){
  console.log("I'm working");
});
