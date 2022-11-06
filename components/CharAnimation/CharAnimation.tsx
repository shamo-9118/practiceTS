import styles from "./CharAnimation.module.css";

export const CharAnimation = () => {
    return (
        <div className={styles.CharContainer}>
            <div className={styles.CharAnimation}>
                <span className={styles.char}>A</span>
                <span className={styles.char}>N</span>
                <span className={styles.char}>I</span>
                <span className={styles.char}>M</span>
                <span className={styles.char}>A</span>
                <span className={styles.char}>T</span>
                <span className={styles.char}>I</span>
                <span className={styles.char}>O</span>
                <span className={styles.char}>N</span>
            </div>
        </div>
    );
};
