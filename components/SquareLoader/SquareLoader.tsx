import classes from "./SquareLoader.module.css";

export const SquareLoader = () => {
    return (
        <div>
            <div className={classes.SquareLoader}></div>
            <div className={classes.SquareSpinner}></div>
        </div>
    );
};
