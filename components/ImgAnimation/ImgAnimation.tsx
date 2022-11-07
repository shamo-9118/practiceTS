import styles from "./ImgAnimation.module.css";
import Image from "next/image";

export const ImgAnimation = () => {
    return (
        <Image
            src="/sample.png"
            alt="we hate svg"
            width={700}
            height={400}
        ></Image>
    );
};
