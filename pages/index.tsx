import { NextPage } from "next";
import { BtnComponents } from "../components/btnComponents";
import { Radius } from "../components/Radius";
import {Rotate} from "../components/routate"

type HeadChildren = {
    [key: string]: {};
};

const Home: NextPage = () => {
    let obj1: object = [];
    let obj2: { a: { b: string } } = { a: { b: "aaa" } };

    return (
        <div>
            <Rotate></Rotate>
            <BtnComponents />
            <Radius></Radius>
        </div>
    );
};

export default Home;
