
// Your API call must have the following components:

// A Host (the host for Web API v3 requests is always https://api.sendgrid.com/v3/)
// An Authorization Header
// An API Key passed in the Authorization Header
// A Request (when submitting data to a resource via POST or PUT, you must submit your request body in JSON format)
// read more: https://sendgrid.com/docs/for-developers/sending-email/quickstart-nodejs


//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
const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')

dotenv.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'jandoe47@yahoo.com', // Change to your recipient
  from: 'leannaland2011@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  // .catch((error) => {
  //   console.error(error)
  // })
