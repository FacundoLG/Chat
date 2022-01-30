// const express = require("express")
const users = require("../components/user/network");
const friend = require("../components/friend/network");
const { verifyToken } = require("../lib/JWT");

const routes = (app) => {
  app.use("/users", users);
  app.use("/friend", verifyToken, friend);
};

module.exports = routes;
