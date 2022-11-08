export const Reduce =()=>{
       // const hello =(callback:any,name:string)=>{
    //     console.log(callback);
    //     console.log("hello" + callback(name));
    // }
    // hello((person:string)=>{
    //     return  person;
    // },"マイケル")

    const str = "animation";
    const strArry = str.split("");

    const result = strArry.reduce((accu, curr) => {
        console.log(accu)
        console.log(`${accu} <${curr}>`);
        return `${accu} <${curr}>`;
    }, "");
    console.log(result);

    // const arry =["a","b","c","d","e"]

    // const result = arry.reduce(function(acuu, curr) {
    //     console.log(acuu,curr)
    //     return  curr + acuu
    // });
    // console.log(result)
    return
}