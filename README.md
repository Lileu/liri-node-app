# liri-node-app
Week 10 homework assignment
https://github.com/Lileu/liri-node-app

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
How Liri-bot can help make your life easier:
1.	Lists upcoming concerts for bands/artists
2.	Finds key details of movies based on the movie title
3.	Provides song information 
4.	Can action any of the above commands from a text file (not requiring user input)

High-level overview of the application architecture
![Liri-bot application overview](/liri-bot-diagram.png)		

## Instructions:
1. To run _Concert-this_ 
Type the below command in the terminal:
`node liri.js concert-this <artist/band name here>`
Press enter.

2. To run _spotify-this-song_ 
Type the below command in the terminal:
`node liri.js spotify-this-song '<song name here>'`
Press enter.

3. To run _movie-this_ 
Type the below command in the terminal:
`node liri.js movie-this '<movie name here>'`
Press enter.

4. To run _do-what-it-says_ 
Type the below command in the terminal:
`node liri.js do-what-it-says`
Press enter.

## Technologies used
Node.js
Node Spotify API - A simple to use API library for the Spotify REST API.
Axios - Promise based HTTP client for the browser and node.js
Moment - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
Dotenv - a zero-dependency module that loads environment variables from a .env file into process.env.
fs - node.js file system module
Spotify API
Bands in Town API
OMDB API
Javascript


