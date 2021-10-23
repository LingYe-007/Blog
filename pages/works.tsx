import { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";

const Works: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LingYe-Thoughts</title>
        <meta name="thoughts" content="灵野的随想"></meta>
      </Head>
      <Header/>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Works;
