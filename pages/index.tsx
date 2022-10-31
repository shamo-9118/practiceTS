import { NextPage } from "next";
import { BtnComponents } from "../components/btnComponents";

type HeadChildren = {
    [key: string]: {};
};

const Home: NextPage = () => {
    let obj1: object = [];
    let obj2: { a: { b: string } } = { a: { b: "aaa" } };

    return (
        <div>
            <BtnComponents />
        </div>
    );
};

export default Home;
