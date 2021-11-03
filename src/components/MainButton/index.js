//style
import * as styles from './style.module.css';

export const MainButton = ({cta, onClick}) => {

    return (
        <button className={styles.container} onClick={ () => onClick && onClick() }>
            { cta }
        </button>
    );
};