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
    axios.get("https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp");
    .then(function(response){
        var results = response.data;
        if (results.length === 0) {
            console.log("It doesn't look like " + parameter + "is playing near you. Try another band!")
        } else {
            console.log("Upcoming gigs for: " + parameter);
            for (var res of results) {
                var eventDate = moment(result.datetime).format("MM/DD/YYYY")
            }
            

    }

}


// 3. movie-this

// 4. do-what-it-says
