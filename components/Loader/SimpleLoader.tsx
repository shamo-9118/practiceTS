import styles from "./SimpleLoader.module.css"

export const SimpleLoader = () => {
    return (
        <div>
            {/* <div className="inline text-[30px] bg-[linear-gradient(transparent_70%,#FFC778_70%)]">
                aaaa
            </div> */}
            <div className={styles.threeDotSpinner}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
