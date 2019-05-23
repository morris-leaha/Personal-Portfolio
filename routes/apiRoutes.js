// var db = require("../models");
// var Sequelize = require("sequelize");

// module.exports = function (app) {

//     // All Contact Submissions
//     app.get("/api/contact", function (req, res) {
//         db.Contact.findAll({}).then(function (dbContact) {
//             res.json(dbContact);
//         });
//     });

//     // Create a New Submission Example
//     app.post("/api/contact", function (req, res) {
//         db.Contact.create(req.body).then(function (dbContact) {
//             res.json(dbContact);
//         });
//     });

// };