import { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import AboutMe from "./aboutMe";

const Thoughts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LingYe-Thoughts</title>
        <meta name='thoughts' content='灵野的随想'></meta>
      </Head>
      <Header/>
      <main>
        <AboutMe></AboutMe>
      </main>
      <footer></footer>
    </div>
  );
};

export default Thoughts;
