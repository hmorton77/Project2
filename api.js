

const path = require("path");
//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
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

// connection to Public drive
//app.use('/project2/public/views', express.static(path.join(__dirname, "public")));
//..
//routes

/////


dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);





