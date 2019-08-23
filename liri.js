// DEPENDENCIES
require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");

var instruction = process.argv[2];
var parameter = process.argv.splice(3).join(" ");

// 1. concert-this
if (instruction === "concert-this") {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        parameter +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      var results = response.data;

      if (results.length === 0) {
        console.log(
          "It doesn't look like " +
            parameter +
            "is playing near you. Try another band!"
        );
      } else {
        console.log("UPCOMING GIGS FOR " + parameter);
        console.log("--------------------------------------------");
        for (var res of results) {
          var eventDate = moment(res.datetime).format("MM/DD/YYYY");
          console.log("Venue: " + res.venue.name);
          console.log("Location: " + res.venue.city + ", " + res.venue.country);
          console.log("Event date: " + eventDate);
          console.log("--------------------------------------------");
        }
      }
    })
    .catch(function(err) {
      if (err.response) {
      }
    });
}

// 3. movie-this

// 4. do-what-it-says
