var path = require("path");
var db = require("../models");
var potato = ["this is some data about potatoes"];
module.exports = function (app) {
  // our home page which we should get when we open the app
  app.get("/", function (req, res) {
    db.Employee.findAll({}).then(function (result) {
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
    db.Employee.findAll({}).then(function (result) {
      console.log(result);
      var employeeObj = {
        results: result,
      };
      res.render("symptomatic", employeeObj);
    });
  });
  // open the hospitalized employee page
  app.get("/hospitalized", function (req, res) {
    db.Employee.findAll({}).then(function (result) {
      console.log(result);
      var employeeObj = {
        results: result,
      };
      res.render("hospitalized", employeeObj);
    });
  });
  app.get("/reminder", function (req, res) {
    res.render("reminder", potato);
  });
};
