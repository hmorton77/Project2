//dependency
var db = require("../models");

const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//routes
module.exports = function (app) {
  // get all the cases to be put on the main page
  app.get("/api/cases", function (req, res) {
    db.Employee.findAll({}).then(function (dbQuar) {
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

  //posting a new employee case FROM THE SUBMISSION FORM
  app.post("/api/cases", function (req, res) {
    console.log(req.body);
    console.log("clicked route");
    db.Employees.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      quarantineStart: req.body.quarantineStart,
      quarantineEnd: req.body.quarantineEnd,
      covidConfirmed: req.body.covidConfirmed,
      currentCondition: req.body.currentCondition,
      activeStatus: "1",
      createdAt: "01/01/2020",
      updatedAt: "01/01/2020",
    }).then(function (dbQuar) {
      res.json(dbQuar);
    });
  });
  // =======================================TBA==================
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

  app.post("update.js", function (req, res) {
    //call your send grid stuff with the addresses you want
  

  
  });
  app.post("/api/sendemail", function (req, res) {
    var msgData = req.body.email

    const msg = {
      to: msgData, // Change to your recipient
      from: {
        name: "Employer Name",
        email: "leannaland2011@gmail.com", // Change to your verified sender
      },
      subject: "Important Work Notice",
      text: "Hello, it is time for you to return to work. Please attend your next shift",
      html: "<strong>Hello, it is time for you to return to work. Please attend your next shift. </strong>",
    };
    //call your send grid stuff with the addresses you want
    sgMail
    .send(msg)
    .then((results) => {
      console.log("Email sent");
      res.json(results)
    })
    .catch((error) => {
      console.error(error);
    });
  })

};
