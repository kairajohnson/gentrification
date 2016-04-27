var mongoose = require("./connection");
var seedData = require("./seed.json");

var Contributor  = mongoose.model("Contributor");

Contributor.remove().then(function(){
  Contributor.create(seedData).then(function(){
    process.exit();

  })
});
