import React,  { useEffect } from 'react';

export const Game = () => {

    // const CORSBypass = 'https://cors-anywhere.herokuapp.com/';

    const apiBaseUrl = 'https://api.musixmatch.com/ws/1.1/';

      const getUser = async () => {
          try {
              const rawData = await fetch( apiBaseUrl);
              const data = await rawData.json();
              console.log(data);
          } catch(err) {
            console.log(err);
            }
        }
    
    useEffect(() => {

        getUser();

    }, []);

    return (
        <main>
            game holder
        </main>
    );
};