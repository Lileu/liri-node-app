// DEPENDENCIES
require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");

const instruction = process.argv[2];
var parameter = process.argv.splice(3).join(" ");

// -------------------------

switch (instruction) {
  case "concert-this":
    if (parameter === "") {
      console.log("Please enter a band you wanna see!");
    } else {
      concert(parameter);
    }
    break;
  case "spotify-this-song":
    if (parameter === "") {
      spotifyThis("The Sign");
      //q=name:abacab&type=album,track
    } else {
      spotifyThis(parameter);
    }
    break;
  case "movie-this":
    if (parameter === "") {
      movieThis("Mr Nobody");
    } else {
      movieThis(parameter);
    }
    break;
  default:
    console.log(
      "Invalid command. You can use any of the following commands: concert-this spotify-this-song movie-this or do-what-it-says"
    );
    break;
}

// 1. node liri.js concert-this <artist/band name here>
function concert(parameter) {
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
function spotifyThis(parameter) {
  spotify.search(
    {
      type: "track",
      query: parameter
    },
    function(err, data) {
      if (err) {
        return console.log("Error Occured: " + err);
      } else {
        for (i = 0; i < 3; i++) {
          var artistName = data.tracks.items[i].artists[0].name;
          var songName = data.tracks.items[i].name;
          var url = data.tracks.items[i].preview_url;
          var albumName = data.tracks.items[i].album.name;

          console.log("-------------------------");
          console.log("Artist: " + artistName);
          console.log("Song: " + songName);
          console.log("Preview: " + url);
          console.log("Album: " + albumName);
          console.log("-------------------------");
        }
      }
    }
  );
}

//   console.log(response.data);

// 3. node liri.js movie-this '<movie name here>'
function movieThis(parameter) {
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
function doThing() {
  fs.readFile("random.txt", "utf-8", function(err, data) {
    if (err) {
      return console.log(error);
    }
    var random = data.split(",");
    spotifyThis(random[1]);
  });
}
