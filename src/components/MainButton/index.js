//style
import * as styles from './style.module.scss';

export const MainButton = ({cta, onClick, disabled, onBottom}) => {

    return (
        <button className={
            `${styles.container}
            ${disabled && styles['container--disabled']}
            ${onBottom && styles['container--on-bottom']}`
            }
            onClick={() => onClick && onClick()}
        >
            { cta }
        </button>
    );
};