import React,  { useState, useEffect } from 'react';

//style
import * as styles from './style.module.css';

export const QuizTimer = ({ startTime }) => {

    const [counter, setCounter] = useState(startTime);

    useEffect(() => {

        const timer = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        return () => {
            clearTimeout(timer);
        };

    }, [counter]);


    return (
        <span className={`${styles.container} ${counter < 6 ? 'danger' : ''}`}>
            { counter }s
        </span>
    );
};