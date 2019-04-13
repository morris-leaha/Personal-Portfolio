// ============ DEPENDENCIES ============

var express = require("express");
var path = require("path");
var db = require("./models");

// ============ EXPRESS CONFIG ===========

var app = express();

var PORT = process.env.PORT || 8080;

// ============ MIDDLEWARE ===========
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ============= ROUTER INFO ==============

require("./routes/apiRoutes")(app);
var syncOptions = { force: false };

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/assets/index.html"));
  });

// ============= LISTENER INFO =============

db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });

module.exports = app;