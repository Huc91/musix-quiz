//style
import React from 'react';
import * as styles from './style.module.css';

export const QuizButton = ({ artist, isTheCorrectOne, showIfIsCorrect, onClick }) => {
    
    const status = isTheCorrectOne ? 'success' : 'danger';

    return (
        <React.Fragment>
            { !showIfIsCorrect ?
                <button className={styles.container} onClick={ () => onClick()}>
                    {`artist ${showIfIsCorrect}`}
                </button>
                :
                <button className={`${styles.container} ${styles[status]}`}>
                    {`artist ${showIfIsCorrect}`}
                </button>

            }
        </React.Fragment>
    );
};