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
    required: [true, "Please, fill the password gap"],
  },
  Email: {
    type: String,
    required: [true, "Please,fill the string gap"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
