const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
  creatorID: {
    type: String,
    required: true,
  },
  friendID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "rejected", "accepted"],
    default: "pending",
  },
  groupName: {
    type: String,
    require: true,
    maxlength: [30, "group name is too long"],
    minlength: [5, "group name is too shot"],
  },
  roomName: {
    type: String,
    required: false,
  },
});

const Friend = mongoose.model("friend", friendSchema);

module.exports = Friend;
