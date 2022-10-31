import React from "react";

type BtnGrid = {
    btnUtil: {
        btnsGrid: string;
        btnsGap: string;
    };
};

export const BtnComponents = (props: BtnGrid) => {
    console.log(`これからの ${props.btnUtil.btnsGap}`);
    
    return (
        //クラスの中でjsを展開することはできない？？
        <div> 
            <button className="inline-block box-border p-[20px_50px] border-[3px]">
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
            </button>
        </div>
    );
};
