import React from "react";

type BtnStyle = {
    [key: string]: {
        bg?: string;
        hover?: string;
        shadow?: string;
        before?: string;
        after?: string;
        id: number;
    };
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
        hover: "hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px] hover:font-normal",
        id: 2,
    },
    {
        bg: "bg-white box-border",
        id: 3,
    },
    //擬似要素使3のボタンを実装した
    {
        bg: "bg-gray-600 border-gray-600 text-white z-10 group opacity-1",
        before: "before:bg-gray-200 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-translate-x-[49%] before:skew-x-12 before:duration:500 before:-z-10 before:group-hover:-translate-x-[120%]",
        after: "after:bg-gray-200 after:w-full after:h-full after:absolute after:top-0 after:right-0 after:translate-x-[49%] after:skew-x-12 before:group-hover:-translate-x-[120%] after:duration-500 after:z-20",
        id: 4,
    },
    {
        after: "after:absolute after:bg-gray-300 after:w-[110%] after:h-full after:top-0 after:-left-4 after:skew-x-[25deg] after:duration-300 after:scale-x-0 hover:after:scale-x-100",
        id: 5,
    },
];

export const BtnComponents = () => {
    return (
        <div className="my-5 grid gap-3 grid-cols-2 w-1/2 mx-auto">
            {styles.map((style) => {
                console.log(style);
                {
                    if (style.id === 3) {
                        return (
                            <button
                                key={style.id}
                                className={`inline-block group relative overflow-hidden mx-auto w-[150px] max-w-[200px] border-gray-700 border-2 ${style.bg} hover:span:translate-none hover:text-white rounded-full hover:font-bold`}
                            >
                                <span className="bg-gray-700 inline-block w-full h-full absolute top-0 -left-5 -translate-x-full  group-hover:translate-x-0 duration-700 -z-10 skew-x-12"></span>
                                button
                                <span className="bg-gray-700 inline-block w-full h-full absolute top-0 -right-5 translate-x-full  group-hover:translate-x-0 duration-700 -z-10 skew-x-12"></span>
                            </button>
                        );
                    } else if (style.id === 4) {
                        return (
                            <button
                                key={style.id}
                                className={`inline-block box-border mx-auto overflow-hidden max-w-[200px] p-[20px_50px] relative ${style.bg} ${style.hover} ${style.shadow} ${style.before} ${style.after}`}
                            >
                                button
                            </button>
                        );
                    } else if (style.id === 5) {
                        return (
                            <button
                                key={style.id}
                                className={`block mx-auto max-w-[400px] p-[50px_400px] bg-[#f2bc43] border-black border-2 rounded-full relative group z-20 overflow-hidden ${style.after}`}
                            >
                                <span className="relative z-20 left-0 top-0 ">
                                    button
                                </span>
                            </button>
                        );
                    } else {
                        return (
                            <button
                                key={style.id}
                                className={`inline-block mx-auto max-w-[200px] p-[20px_50px] ${style.bg} ${style.hover} ${style.shadow}`}
                            >
                                button
                            </button>
                        );
                    }
                }
            })}
        </div>
    );
};
