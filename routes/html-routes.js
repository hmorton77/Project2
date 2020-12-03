var path = require("path");

module.exports = function (app) {
  // our home page which we should get when we open the app
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/..public/views/layouts/index.handlebars/"));
  });
  // the submission page when we open the "add patient page"
  app.get("/submit", function (req, res) {
    res.sendFile(path.join(__dirname, "..public/"));
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
