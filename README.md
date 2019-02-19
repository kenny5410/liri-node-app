# Liri Bot

## What
Liri is a node based application that allows a user to enter arguments in the command line to gather inforamtion about a concert, song, or movie.
## How
Four different commands/arguments can be used in the application including concert-this, spotify-this, movie-this, and do-what-it-says. The below steps will walk you through the process of using each of these arguments. The following Node packages are used to make this application work.

- Node Spotify API
- Axios 
- Moment
- DotEnv

**APIs Used**
- Spotify (Song Information)
- Bands in Town (Concert Information)
- OMDB (Movie Information)

# Concert This
## How it works: 
1. In the command line type in **node liri.js concert-this (Type in a musical artist/band name).**
2. The below information will be returned about the musical artist or band name.
- The Name of the venue
- The Venue location
- The date of the event

**Example**

![Concert This Screenshot](/screenshots/concert_this_screen_shot.png?raw=true "Concert this Screenshot")

# Spotify This
## How it works: 
1. In the command line type in **node liri.js spotify-this-song (Type in a song title).**
2. The below information will be returned about the song title that was entered.
- The  Artist's Name
- The song's name
- A link of the song from Spotify
- The album that the song is from

**Example**

![Spotify This Screenshot](/screenshots/spotify_this_screen_shot.png?raw=true "Spotify This Screenshot")

# Movie This
## How it works: 
1. In the command line type in **node liri.js movie-this (Type in a movie title).**
2. The below information will be returned about the movie that was entered.
- The title of the movie
- The year the movie came out
- The IMDB rating of the movie
- The Rotten Tomatoes rating of the movie
- The country(s) where the movie was produced
- The language(s) of the movie
- The plot of the movie
- The actors in the movie

**Example**

![Movie This Regular Screenshot](/screenshots/movie_this_screen_shot_regular.png?raw=true "Movie This Regular Screenshot")

3. If no movie is entered into the argument movie information for the movie Mr. Nobody is returned (see below).

**Example**

![Movie This Blank Screenshot](/screenshots/movie_this_screen_shot_blank.png?raw=true "Movie This Blank Screenshot")

# Do What It Says
## How it works: 
1. In the command line type in **node liri.js do-what-it-says.**
2. The string "I Want it That Way" will be read from the random.txt file which will run the **Spotify This** function and search for the song information for that song name. The below will be printed on the console

**Example**

![Do What It Says Screenshot](/screenshots/do_what_it_says.png?raw=true "Do What It Says Screenshot")
