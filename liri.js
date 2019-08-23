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

// 1. node liri.js concert-this <artist/band name here>
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

// 2. node liri.js spotify-this-song '<song name here>'

//   console.log(response.data);

// 3. node liri.js movie-this '<movie name here>'

if (instruction === "movie-this" && parameter === "") {
  axios
    .get("http://www.omdbapi.com/?t=mr+nobody&apikey=trilogy&")
    .then(function(response) {
      console.log("");
      console.log("You should check out Mr. Nobody on Netflix!");
      console.log("Title: " + response.data.Title);
      console.log("Released: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].value);
      console.log("Produced in: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Actors);
      console.log("--------------------------------------------");
    })
    .catch(function(err) {
      if (err.response) {
      }
    });
} else if (instruction === "movie-this") {
  axios
    .get(
      "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy"
    )
    .then(function(response) {
      console.log("");
      console.log("Title: " + response.data.Title);
      console.log("Released: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].value);
      console.log("Produced in: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Actors);
      console.log("--------------------------------------------");
    })
    .catch(function(err) {
      if (err.response) {
      }
    });
}

// 4. node liri.js do-what-it-says
