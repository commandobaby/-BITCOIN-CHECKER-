var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 

var user_schema = new Schema({
  uuid: {type: String},
  activate: {type: String},
});

module.exports = mongoose.model("user", user_schema);