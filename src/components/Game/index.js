import React,  { useEffect } from 'react';

export const Game = () => {

    const CORSProxy = window.location.hostname === "localhost" ? "https://cors-anywhere.herokuapp.com/" : "/api/";
    const apiBaseUrl = 'https://api.musixmatch.com/ws/1.1/',
        trackTitle = 'goosebumps',
        KEY = '71c04f50d5a58a93785ea8ec895155d0',
        search = `track.search?q_track=${trackTitle}&page_size=10&page=10&s_track_rating=desc&apikey=${KEY}`

      const getUser = async () => {
          try {
              const rawData = await fetch( CORSProxy+search);
              const data = await rawData.json();
              console.log(data);
          } catch(err) {
            console.log(err);
            }
        }
    
    useEffect(() => {

        getUser();

    });

    return (
        <main>
            game holder
        </main>
    );
};