var mongoose = require("mongoose");

var contributorSchema = {
  firstname: String,
  lastname: String,
  email: String,
  neighborhood: String,
  city: String,
  state: String,
  video_url: String
}

mongoose.model("Contributor", contributorSchema);
mongoose.connect("mongodb://localhost/gentrification")

module.exports = mongoose;
