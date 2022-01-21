const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "Username is required"],
    min: [4, "Bro, your username needs more characters"],
    max: [20, "Your username is too long"],
  },
  NickName: {
    type: String,
    required: false,
  },
  Password: {
    type: String,
    require: [true, "Please, fill the password gap"],
    min: [5, "Password too short"],
    max: [30, "Wow wow wow the password is too long"],
  },
  Gender: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
