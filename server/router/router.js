// const express = require("express")
const users = require("../components/user/network");
const friend = require("../components/friend/network");

const routes = (app) => {
  app.use("/users", users);
  app.use("/friend", friend);
};

module.exports = routes;
