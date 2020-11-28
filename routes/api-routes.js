//dependency
var db = require("../models");

//routes
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
  //posting a new employee case FROM THE SUBMISSION FORM
  app.post("/api/cases", function (req, res) {
    db.Quarantine.Create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      quarantineStart: req.body.quarantineStart,
      quarantineEnd: req.body.quarantineEnd,
      covidConfirmed: req.body.covidConfirmed,
      currentCondition: req.body.currentCondition,
    }).then(function (dbQuar) {
      res.json(dbQuar);
    });
  });
  //"delete" route will just change the active status to false
  app.put("/api/cases", function (req, res) {
    db.Quarantine.update(
      {
        activeStatus: false,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then(function (dbQuar) {
        res.json(dbQuar);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  //update route to update posts
  app.put("/api/cases", function (req, res) {
    db.Quarantine.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        quarantineStart: req.body.quarantineStart,
        quarantineEnd: req.body.quarantineEnd,
        covidConfirmed: req.body.covidConfirmed,
        currentCondition: req.body.currentCondition,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then(function (dbQuar) {
        res.json(dbQuar);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};
