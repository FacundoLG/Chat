// const express = require("express")
const users = require("../components/user/network");
const routes = (app) => {
  app.use("/users", users);
};

module.exports = routes;
