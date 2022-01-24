const express = require("express");
const router = express.Router();
const { LoginUser, registerUser } = require("./controler");

router.post("/register", registerUser);

router.post("/login", LoginUser);

router.post("/", (req, res) => {
  res.json({ message: "Si" });
});

module.exports = router;
