const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/classroom_management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = mongoose.Schema({
  username: String,
  password: String
});

// Use passport-local-mongoose plugin
userSchema.plugin(plm);

module.exports = mongoose.model("admin", userSchema);