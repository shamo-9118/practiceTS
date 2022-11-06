import styles from "./Menu.module.css";
import { useCallback, useState } from "react";

export const Menu = () => {
    const [menuIsShow, setMenuIsShow] = useState(false);
    const handleClick = () => {
        setMenuIsShow(!menuIsShow);
    };
    return (
        <button
            className={`${styles.MenuIcon} ${
                menuIsShow ? styles.openMenuIcon : null
            }`}
            onClick={handleClick}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};
