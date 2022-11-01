import React from "react";

type BtnStyle = {
    [key: string]: { bg: string; hover?: string; shadow?: string; id: number };
};

const styles = [
    {
        bg: "bg-gray-300",
        hover: "hover:bg-gray-800 shadow hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,5)]",
        shadow: "hover:tracking-widest duration-300 hover:text-white rounded",
        id: 1,
    },
    {
        bg: "bg-gray-400 font-bold rounded-[7px] shadow-[2px_2px_0_0_rgba(0,0,0,6)] border-[1px] border-[rgba(0,0,0,6)] duration-300",
        hover:"hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px] hover:font-normal",
        id: 2,
    },
    {
        bg: "bg-gray-500 border-[0_2px_2px_0]",
        id: 3,
    },
    {
        bg: "bg-gray-600",
        id: 4,
    },
];

export const BtnComponents = () => {
    return (
        <div className="my-5 grid gap-3 grid-cols-2 w-1/2 mx-auto">
            {styles.map((style) => {
                console.log(style);
                return (
                    <button
                        key={style.id}
                        className={`inline-block mx-auto max-w-[200px] p-[20px_50px] border-gray-800 ${style.bg} ${style.hover} ${style.shadow}`}
                    >
                        button
                    </button>
                );
            })}
        </div>
    );
};
