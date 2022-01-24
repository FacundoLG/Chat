const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const secret = process.env.SECRET;
const { error, success } = require("../utils/response");
const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
  if (
    req.headers.Authorization &&
    req.headers.Authorization.split(" ")[0] === "bearer"
  ) {
    const token = req.headers.Authorization.split(" ")[1];
    token &&
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          error(req, res, "Token expired or invalid", 403);
        } else {
          req.user = decoded;
          next();
        }
      });
  } else {
    error(req, res, "You need a token", 400);
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
