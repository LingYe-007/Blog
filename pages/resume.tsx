import { NextPage } from "next";
import Head from "next/head";
import { useRouter} from "next/router";
import Header from "../component/header";

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LingYe-My Experience</title>
        <meta name="description" content="灵野的简历"></meta>
      </Head>
      <Header></Header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Resume;
