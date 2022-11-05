import { NextPage } from "next";
import { SimpleLoader } from "../components/Loader/SimpleLoader";
import { SquareLoader } from "../components/SquareLoader/SquareLoader";
import {DualRoundLoader} from "../components/DualRoundLoader/DualRoundLoader"

const Loaders = () => {
    return (
        <>
            <SimpleLoader></SimpleLoader>
            <SquareLoader></SquareLoader>
            <DualRoundLoader></DualRoundLoader>
        </>
    );
};
export default Loaders;
