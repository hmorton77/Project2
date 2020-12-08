var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
// setting the port for Heroku
app.set("port", PORT);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

var db = require("./models");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
