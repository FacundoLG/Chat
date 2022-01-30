const express = require("express");
const { CreateFriendRequest } = require("./controler");
const router = express.Router();

router.post("/sendfriendrequest", CreateFriendRequest);

module.exports = router;
