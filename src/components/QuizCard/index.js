import React, { useState, useEffect } from 'react';

import { QuizTimer } from '../QuizTimer';
import { QuizButton } from '../QuizButton';

//style
import * as styles from './style.module.scss';

export const QuizCard = ({ question, checkAnswer, timeToAnswer }) => {

    const [isLoading, setLoading] = useState(false);

    const [showResults, setShowResults] = useState(false);

    const [questionText, setQuestionText] = useState(null);

     const [selectedAnswer, setSelectedAnswer] = useState(null);

    const getRandomIntInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    
    const handleAnswer = (index) => {
        checkAnswer(index);
        //handle the UI
        setSelectedAnswer(index);
        setShowResults(true);
    }

    const onTimeIsUp = () => {
        handleAnswer(null);
    }
    
    useEffect(() => {

    // const CORSProxy = "https://cors-anywhere.herokuapp.com/";
    const CORSProxy = "https://musix-cors.herokuapp.com/";
    const apiBaseUrl = 'https://api.musixmatch.com/ws/1.1/',
        KEY = '71c04f50d5a58a93785ea8ec895155d0',
        artistToSearch = question.selectedArtists[question.correctAnswer],
        search = `track.search?q_artist=${artistToSearch}&page_size=30&page=1&s_artist_rating=desc&s_track_rating=desc&f_has_lyrics=1&apikey=${KEY}`

      const getTracks = async () => {
          try {
              const rawData = await fetch( CORSProxy+apiBaseUrl+search);
              const data = await rawData.json();
              return data;
          } catch(err) {
              console.log(err);
            }
      }
    
    const getLyrics = async (trackId) => {
    try {
        const rawData = await fetch( CORSProxy+apiBaseUrl+`track.lyrics.get?track_id=${trackId}&apikey=${KEY}`);
        const data = await rawData.json();
        return data;
    } catch(err) {
    console.log(err);
    }
}
    const generateTrivia = async () => {
        try {
            setLoading(true);
            const { message: { body: { track_list } } } = await getTracks();
            
            const { track: { track_id } } = track_list[getRandomIntInRange(0, track_list.length)];

            console.log(track_id);
            const { message: { body: { lyrics: { lyrics_body } } } } = await getLyrics(track_id);

            const lines = lyrics_body.split('\n');
            console.log(lines);
            const lineIndex = getRandomIntInRange(0, lines.length - 4);
            const quote = `
                ${lines[lineIndex]}
                ${lines[lineIndex + 1]}
            `

            setQuestionText(quote);

            
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
        generateTrivia();
    }, [question]);

    return (
        <div className={styles.container}>
            {isLoading
                ? <i>loading...</i>
                : !showResults && <QuizTimer startTime={timeToAnswer} onTimeIsUp={onTimeIsUp}/>
            }
            {!isLoading &&
                <React.Fragment>
                {
                    questionText
                    ?
                    <strong>
                        {questionText}
                    </strong>
                    :
                    <p>
                        <strong>ERROR: There is a problem with the API</strong> check <a href="https://cors-anywhere.herokuapp.com/corsdemo">CORS proxy</a> or if you're making too many requests
                    </p>
                }
                {question.selectedArtists.map( (artist, index) => {
                    return <QuizButton
                        onClick={() => handleAnswer(index)}
                        key={index}
                        isSelected={ index === selectedAnswer }
                        isTheCorrectOne={index === question.correctAnswer}
                        showIfIsCorrect={showResults}
                        artist={artist}>
                    </QuizButton>
                    })}
                </React.Fragment>
            }
            
        </div>
    );
};