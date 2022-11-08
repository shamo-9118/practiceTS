import { CharAnimation } from "../components/CharAnimation/CharAnimation";
import { Menu } from "../components/Menu/Menu";
import { ImgAnimation } from "../components/ImgAnimation/ImgAnimation";
import { log } from "console";

const menu = () => {
    return (
        <div className="bg-cyan-200 absolute left-0 right-0">
            <Menu></Menu>
            <CharAnimation></CharAnimation>
        </div>
    );
};
export default menu;
