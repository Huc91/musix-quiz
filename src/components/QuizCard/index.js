import { QuizTimer } from '../QuizTimer';

//style
import * as styles from './style.module.css';

export const QuizCard = ({question}) => {

    return (
        <div className={styles.container}>
            <QuizTimer startTime={60} />
            quiz
        </div>
    );
};