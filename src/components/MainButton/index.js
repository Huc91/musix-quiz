//style
import * as styles from './style.module.css';

export const MainButton = ({cta}) => {

    return (
        <button className={styles.container}>
            { cta }
        </button>
    );
};