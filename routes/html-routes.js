var path = require("path");
var db = require("../models");
var potato = ["this is some data about potatoes"];
module.exports = function (app) {
  // our home page which we should get when we open the app
  app.get("/", function (req, res) {
    db.Employee.findAll({
      where: {
        id: 1,
      },
    }).then(function (result) {
      console.log(result);
      var employeeObj = {
        results: result,
      };
      res.render("index", employeeObj);
    });
  });
  // the submission page when we open the "add patient page"
  app.get("/submission", function (req, res) {
    res.render("submission", potato);
  });
  //open the symptomatic employee page
  app.get("/symptomatic", function (req, res) {
    db.Employee.findAll({
      where: {
        currentCondtion: "symptomatic",
      },
    }).then(function (result) {
      res.render("index", result);
    });
  });
  // open the hospitalized employee page
  app.get("/hospitalized", function (req, res) {
    db.Employee.findAll({
      where: {
        currentCondtion: "hospitalized",
      },
    }).then(function (result) {
      res.render("index", result);
    });
  });
  app.get("/reminder", function (req, res) {
    res.render("reminder", potato);
  });
};
