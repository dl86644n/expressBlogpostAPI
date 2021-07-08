const { Router } = require("express");

module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/blogpost.controller");

  // router.get('/', function(req, res){
  //     res.send('You have reached the router handler for get all blog posts');
  // });

  router.get("/", controller.findAll);

  router.get("/:id", controller.findById);

  app.use("/api/blogpost", router);
};
