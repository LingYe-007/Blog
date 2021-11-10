import { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import IdCard from "../component/idCard";

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LingYe-My Experience</title>
        <meta name="description" content="灵野的简历"></meta>
      </Head>
      <Header>
      </Header>
      <main>
        <IdCard></IdCard>
      </main>
      <footer></footer>
    </div>
  );
};

export default Resume;
