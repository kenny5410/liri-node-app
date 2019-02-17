require("dotenv").config();

//var keys = require("./keys.js");

//var spotify = new spotify(keys.spotify);

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

    var artist = process.argv[3];
    var moment = require("moment");
    var axios = require("axios");
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
        console.log("Concert Info")
        console.log("------------------------")
        console.log("Venue: " + response.data[0].venue["name"]);
        //console.log("The location of the venue is: " + response);
        console.log("Location: " + response.data[0].venue["city"] + ", " + response.data[0].venue["country"]);
        //console.log("The date of the concert is: " + response);
        var realDate = response.data[0].datetime;
        console.log("Date & Time: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a", realDate));
    });
};

function spotify() {
    console.log("spotify-this-song");
    //Artist
    //The song's name
    //A preview link of the song from Spotify
    //The album that the song is from
};

function movie() {
    console.log("movie-this");
    //Title of the movie.
    //Year the movie came out.
    //IMDB Rating of the movie.
    //Rotten Tomatoes Rating of the movie.
    //Country where the movie was produced.
    //Language of the movie.
    //Plot of the movie.
    //Actors in the movie.
};

function doThis() {
    console.log("do-what-it-says");
    //run the sporify-this-song for "I Want it That Way"
}