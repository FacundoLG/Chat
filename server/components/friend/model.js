const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
  creatorID: {
    type: ObjectId,
    required: true,
  },
  friendID: {
    type: ObjectId,
    required: true,
  },
  groupState: {
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

const friend = new mongoose.Model("friend", friendSchema);

module.exports = friend;
