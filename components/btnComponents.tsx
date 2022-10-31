import React from "react";

type BtnStyle = {
    [key: string]: { stinrg: string };
};

const styles = [
    {
        hover: "hover:bg-brack-300",
    },
    {
        hover: "hover:bg-brack-400",
    },
    {
        hover: "hover:bg-brack-400",
    },
];

export const BtnComponents = (props: BtnStyle) => {
    return (
        //className={${}この中にjsを書くといける}
        // <div className="grid grid-cols-2 gap-3 w-1/2">
        //     {styles.map((style) => {
        //         <button className="inline-block box-border p-[20px_50px] border-[3px]">
        //             Button
        //         </button>;
        //     })}
            {/* <button className="inline-block box-border p-[20px_50px] border-[3px]">
                Button
            </button>
            <button className="inline-block box-border p-[20px_50px] border-[3px]">
                Button
            </button>
            <button className="inline-block box-border p-[20px_50px] border-[3px]">
                Button
            </button>
            <button className="inline-block box-border p-[20px_50px] border-[3px]">
                Button
            </button> */}
        </div>
    );
};
