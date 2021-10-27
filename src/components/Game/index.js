import React,  { useEffect } from 'react';

export const Game = () => {

    const artists = [
        'Kendrick Lamar', 'Wu-Tang Clan', 'Lil Uzi Vert',
        'Tyler, The creator', 'Nas', 'Mos Def',
        'Action Bronson', 'Travis Scott', 'Chance the Rapper',
        'Frank Ocean', 'Childish Gambino', 'Pete Rock', '2Pac',
        'A Tribe Called Quest', 'The Notorious B.I.G.', 'De La Soul',
        'Outkast', 'Gang Starr', 'Drake', 'Earl Sweatshirt', 'Mac Miller',
        'Lil Peep', 'XXXTENTACION', 'Kanye West', 'Joey Purp', 'Kill The Vultures',
        'Pusha T', 'Vince Staples'
    ]

    const numberOfQuestions = 6;

    const getRandomIntInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // this have more perfomances with the "double pointers", I'm avoiding a nested for loop
    const pickArtists = (numberOfQuestions, numberOfArtists) => {
        if (numberOfArtists > artists.length || !artists.length) {
            return null;
        }
        let i = 0;
        let q = 0;
        let pickedIndexes = {};
        let selectedArtists = [];
        const questionArtists = {};
        let rightAnswer = getRandomIntInRange(0, numberOfArtists);
        //continue picking until n are taken, avoid multiple picks
        while (q < numberOfQuestions) {
            const randomIndex = getRandomIntInRange(0, artists.length);
            if (!pickedIndexes.randomIndex) {
                selectedArtists.push(artists[randomIndex]);
                i++
                if (i === numberOfArtists) {
                    questionArtists[q] = selectedArtists
                    //reset
                    i = 0;
                    pickedIndexes = {};
                    selectedArtists = [];
                    rightAnswer = getRandomIntInRange(0, numberOfArtists);
                    //go to the next question generation
                    q++
                }
            } 
        }
        return questionArtists;
    }

    console.log(pickArtists(6, 3));
     

    const CORSProxy = window.location.hostname === "localhost" ? "https://cors-anywhere.herokuapp.com/" : "";
    const apiBaseUrl = 'https://api.musixmatch.com/ws/1.1/',
        KEY = '71c04f50d5a58a93785ea8ec895155d0',
        search = `track.search?q_artist=frank ocean&page_size=30&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${KEY}`

      const getUser = async () => {
          try {
              const rawData = await fetch( CORSProxy+apiBaseUrl+search);
              const data = await rawData.json();
              console.log(data);
          } catch(err) {
            console.log(err);
            }
        }

    /*      "music_genre": {
            "music_genre_id": 1073,
            "music_genre_parent_id": 18,
            "music_genre_name": "Hip-Hop",
            "music_genre_name_extended": "Hip Hop/Rap / Hip-Hop",
            "music_genre_vanity": "Hip-Hop-Rap-Hip-Hop"
          }
    */
    /*
            {
          "music_genre": {
            "music_genre_id": 1075,
            "music_genre_parent_id": 18,
            "music_genre_name": "Old School Rap",
            "music_genre_name_extended": "Hip Hop/Rap / Old School Rap",
            "music_genre_vanity": "Hip-Hop-Rap-Old-School-Rap"
          }
        },
    */
    
    
    useEffect(() => {

        getUser();

    });

    return (
        <main>
            game holder
        </main>
    );
};