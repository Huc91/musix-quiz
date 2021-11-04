import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import useLocalStorage from "use-local-storage";

// Components
import { QuizCard } from '../QuizCard';
import { MainButton } from '../MainButton';

export const Game = ({numberOfQuestions, questions, timeToAnswer, delay}) => {

    const [isGameEnd, setGameEnd] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const [playerName] = useLocalStorage("player", '');
    const [userHighScore, setUserHighScore] = useLocalStorage(`${playerName}_max_score`, 0);
    const [userSavedScores, setUserSavedScores] = useLocalStorage(`${playerName}_high_score`, null);
    const [allUsersHighScores, setAllUsersHighScores] = useLocalStorage('all_users_high_scores', null);

    const saveScore = (score) => {
        const allUserScores = userSavedScores ? JSON.parse(userSavedScores) : [];
        allUserScores.push(score);
        console.log(allUserScores);
        setUserSavedScores(JSON.stringify(allUserScores))
    };

    const saveHighScore = (score) => {
        if (score === 0 || score < userHighScore) {
            return;
        }
        setUserHighScore(score);
        const allUsersHighScoresArr = allUsersHighScores ? JSON.parse(allUsersHighScores) : [];
        const userDataIndex = allUsersHighScoresArr.findIndex(scores => scores.playerName === playerName);
        const dataToSave = {
            playerName,
            score,
        }
        if (userDataIndex === -1) {
            allUsersHighScoresArr.push(dataToSave)
        } else {
            allUsersHighScoresArr[userDataIndex] = dataToSave;
        }
        setAllUsersHighScores(JSON.stringify(allUsersHighScoresArr))
    };

    const handleEndOfTheGame = () => {
        setTimeout(() => { setGameEnd(true); }, delay);
        saveScore(score);
        saveHighScore(score);
    }
 

    const checkAnswer = (index) => {
        const answer = questions[currentQuestion].correctAnswer
        if (index === answer) {
            if (currentQuestion < numberOfQuestions - 1) {
                setScore(score + 5);
                setTimeout(() => { setCurrentQuestion(currentQuestion + 1) }, delay);
            } else {
                //The user won the game
                //all correct answers bonus
                setScore(score + 10);
                handleEndOfTheGame();
            }
        } else {
            //The user lost
            handleEndOfTheGame();
        }
    };

    const hasWin = () => {
        if (currentQuestion < numberOfQuestions)
            return false;
        
        return true;
    }
    return (
        <main>
            <span>{score}</span>
            {isGameEnd ?
                <div>
                    <span>{hasWin() ? 'You won' : 'Game over'}</span>
                    <span>{score} points</span>
                    {score > userHighScore && <span>New High Score!</span> }
                    <Link to="/results">
                        <MainButton cta="RESULTS" />
                    </Link>
                    <Link to="/">
                        <MainButton cta="PLAY AGAIN" />
                    </Link>
                    <span>Play again</span>
                </div>
                :
                <QuizCard question={questions[currentQuestion]} checkAnswer={checkAnswer} key={currentQuestion} timeToAnswer={timeToAnswer}></QuizCard>
            }
            <span>{`${currentQuestion + 1} of ${numberOfQuestions}`}</span>
        </main>
    );
};