require("dotenv").config();
var keys = require("./keys.js");

//The variable for the node argument
var command = process.argv[2];

//Switch statement for the command variable
switch (command) {
    case "concert-this":
    concert();
    break;
    case "spotify-this-song":
    spotify();
    break;
    case "movie-this":
    movie();
    break;
    case "do-what-it-says":
    doThis();       
} 

function concert() {
    var nodeArgs = process.argv;
    var artistName = "";
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            artistName = artistName + "+" + nodeArgs[i];
        } 
        else {
        artistName += nodeArgs[i];
        }
    }
    var moment = require("moment");
    var axios = require("axios");
    axios.get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp").then(function(response) {
        console.log("Concert Info")
        console.log("------------------------")
        console.log("Venue: " + response.data[0].venue["name"]);
        //console.log("The location of the venue is: " + response);
        console.log("Location: " + response.data[0].venue["city"] + ", " + response.data[0].venue["country"]);
        //console.log("The date of the concert is: " + response);
        var realDate = response.data[0].datetime;
        console.log("Date & Time: " + moment(realDate).format("dddd, MMMM Do YYYY, h:mm:ss a"));
    });
};

function spotify() {
    var nodeArgs = process.argv;
    var songName = "";
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            songName = songName + "+" + nodeArgs[i];
        } 
        else {
        songName += nodeArgs[i];
        }
    }

    var Spotify = require('node-spotify-api');
    var spotify = new Spotify({
        id: 'cfa32cb3a22049b79c3261ffb85568d1',
        secret: '7efadf245aa34bde9297303930632409'
      });

    spotify.search({type: 'track', query: songName }, function(err, data) {
        if (err) {
            return console.log('Error occured: ' + err);
        };
        console.log("Song Info")
        console.log("------------------------")
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
    });
};

function movie() {
    var axios = require("axios");
    var nodeArgs = process.argv;
    var movieName = "";
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        }
        else {
        movieName += nodeArgs[i];
        }
    }
    if ( movieName === "") {
        movieName = "mr+nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
            console.log(queryUrl);
            console.log("Movie Info")
            console.log("------------------------")
            console.log("Movie Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country(s) Produced: " + response.data.Country);
            console.log("Language(s): " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    )
};

function doThis() {
    console.log("do-what-it-says");
    //run the sporify-this-song for "I Want it That Way"
}