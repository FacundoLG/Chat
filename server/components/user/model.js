const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "Username is required"],
    minlength: [4, "Bro, your username needs more characters"],
    maxlength: [20, "Your username is too long"],
  },
  NickName: {
    type: String,
    required: false,
  },
  Password: {
    type: String,
    require: [true, "Please, fill the password gap"],
  },
  Gender: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
