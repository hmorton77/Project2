// Your API call must have the following components:

// A Host (the host for Web API v3 requests is always https://api.sendgrid.com/v3/)
// An Authorization Header
// An API Key passed in the Authorization Header
// A Request (when submitting data to a resource via POST or PUT, you must submit your request body in JSON format)
// read more: https://sendgrid.com/docs/for-developers/sending-email/quickstart-nodejs

const path = require("path");
//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
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

<<<<<<< HEAD
// connection to Public drive 
app.use('/project2/public/views', express.static(path.join(__dirname, "public")));
=======
// connection to Public drive
//app.use('/project2/public/views', express.static(path.join(__dirname, "public")));
>>>>>>> 7137afbab0f168daff1620874f2a41af9221bffc
//..
//routes

/////

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

$("#webapi").click(function () {
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
});
