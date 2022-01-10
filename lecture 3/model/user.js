const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  isAdmin: Boolean,
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
