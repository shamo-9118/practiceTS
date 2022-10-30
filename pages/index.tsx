import Head from "next/head";
import { NextPage } from "next";

type HeadChildren = {
  [key:string]:{}
};

const Home: NextPage = (props: HeadChildren) => {
  console.log(props);

  return (
    <>
      {props.children}
      <div>hello</div>
    </>
  );
};

export default Home;
