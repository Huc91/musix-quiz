//style
import * as styles from './style.module.scss';

export const Button = ({ cta, onClick, disabled }) => {
	return (
		<button
			className={`${styles.container}
            ${disabled && styles['container--disabled']}
            `}
			onClick={() => onClick && onClick()}
		>
			{cta}
		</button>
	);
};
