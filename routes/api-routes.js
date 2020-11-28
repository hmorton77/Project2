var db = require("../models");

module.exports = function (app) {
  // get all the cases to be put on the main page
  app.get("/api/cases", function (req, res) {
    db.Quarantine.findAll({}).then(function (dbQuar) {
      res.json(dbQuar);
    });
  });
  // get all the employees with the status of [something]
  app.get("/api/cases/currentCondition/:currentCondition", function (req, res) {
    db.Quarantine.findAll({
      where: {
        currentCondition: req.params.currentCondition,
      },
    }).then(function (dbQuar) {
      res.json(dbQuar);
    });
  });
  //get a single table entry
  app.get("/api/cases/:id", function (req, res) {
    db.Quarantine.findAll({
      where: {
        id: req.params.id,
      },
    }).then(function (dbQuar) {
      res.json(dbQuar);
    });
  });
  //posting a new employee case
  app.post("/api/cases", function (req, res) {
    db.Quarantine.Create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      quarantineStart: req.body.quarantineStart,
      quarantineEnd: req.body.quarantineEnd,
      covidConfirmed: req.body.covidConfirmed,
      currentCondition: req.body.currentCondition,
    });
  });
};
