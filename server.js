var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

// Initialize Express, port at 3000
var PORT = 3000;
var app = express();

// The middleware

// Morgan logger for logging requests
app.use(logger("dev"));
// Body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect
("mongodb://localhost/NYTScrape");

// // A GET route for scraping the echoJS website
// app.get("/scrape", function(req, res) {
//     // First, we grab the body of the html with request
//     axios.get("http://www.nytimes.com/").then(function(response) {
//       // Then, we load that into cheerio and save it to $ for a shorthand selector
//       var $ = cheerio.load(response.data);

//         // Now, we grab every h2 within an article tag, and do the following:
//     $("css-2qshlm esl82me1").each(function(i, element) {
//         // Save an empty result object
//         var result = {};

//         result.title = $(this)
//         .children("a")
//         .text();
//       result.link = $(this)
//         .children("a")
//         .attr("href");
//           // Create a new Article using the `result` object built from scraping
//           db.Article.create(result)
//           .then(function(dbArticle) {
//             // View the added result in the console
//             console.log(dbArticle);
//           })
//           .catch(function(err) {
//             // If an error occurred, send it to the client
//             return res.json(err);
//           });
//       });

//           // If we were able to successfully scrape and save an Article, send a message to the client
//     res.send("Scrape Complete");
// });
// });




app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });