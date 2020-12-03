var path = require("path");
var potato = [potato];
module.exports = function (app) {
  // our home page which we should get when we open the app
  app.get("/", function (req, res) {
    res.render("index", potato);
  });
  // the submission page when we open the "add patient page"
  app.get("/submit", function (req, res) {
    res.render("submission", employee);
  });
  //open the symptomatic employee page
  app.get("/symptomatic", function (req, res) {
    res.sendFile(path.join(__dirname, "..public/"));
  });
  // open the hospitalized employee page
  app.get("/hospitalized", function (req, res) {
    res.sendFile(path.join(__dirname, "..public/"));
  });
};
