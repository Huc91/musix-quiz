//style
import * as styles from './style.module.scss';

export const TextInput = ({ onChange, value, label, placeholder, type = 'text' }) => {
    return (
        <div className={styles.container}>
            {label && <label>{label}</label>}
            <input type={type} value={value} placeholder={placeholder} onChange={onChange}>
            </input>
        </div>
	);
};
