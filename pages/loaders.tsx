import { NextPage } from "next";
import { SimpleLoader } from "../components/Loader/SimpleLoader";
import { SquareLoader } from "../components/SquareLoader/SquareLoader";
import {DualRoundLoader} from "../components/DualRoundLoader/DualRoundLoader"
import { AccordionLoading } from "../components/AccordionLoader/AccordionLoading";

const Loaders = () => {
    return (
        <>
            <SimpleLoader></SimpleLoader>
            <SquareLoader></SquareLoader>
            <DualRoundLoader></DualRoundLoader>
            <AccordionLoading></AccordionLoading>
        </>
    );
};
export default Loaders;
