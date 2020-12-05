var path = require("path");
var potato = ["this is some data about potatoes"];
module.exports = function (app) {
  // our home page which we should get when we open the app
  app.get("/", function (req, res) {
    res.render("index", potato);
  });
  // the submission page when we open the "add patient page"
  app.get("/submission", function (req, res) {
    res.render("submission", potato);
  });
  //open the symptomatic employee page
  app.get("/symptomatic", function (req, res) {
    res.render("symptomatic", potato);
  });
  // open the hospitalized employee page
  app.get("/hospitalized", function (req, res) {
    res.render("hospitalized", potato);
  });
  app.get("/reminder", function (req, res) {
    res.render("reminder", potato);
  });
};
