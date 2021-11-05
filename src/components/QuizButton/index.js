//style
import React from 'react';
import * as styles from './style.module.scss';

export const QuizButton = ({ artist, isTheCorrectOne, showIfIsCorrect, onClick, isSelected }) => {
	const status = isTheCorrectOne ? 'success' : 'danger';

	return (
		<React.Fragment>
			{!showIfIsCorrect ? (
				<button className={styles.container} onClick={() => onClick()}>
					{artist}
				</button>
			) : (
				<button
					className={`${styles.container} ${
						(isSelected || isTheCorrectOne) && styles[status]
					} ${isSelected && styles.selected}`}
				>
					{artist}
				</button>
			)}
		</React.Fragment>
	);
};
