const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("./controler");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/", (req, res) => {
  res.json({ message: "Si" });
});

module.exports = router;
