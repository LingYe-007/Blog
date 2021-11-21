import { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import IdCard from "../component/idCard";
import Think from "../component/think";
import styles from "../styles/thoughts.module.css";
import * as api from "../services/api";

const Thoughts: NextPage = (props:any) => {
  const thoughts = props.res.data
  console.log(thoughts)
  return (
    <div>
      <Head>
        <title>LingYe-Thoughts</title>
        <meta name="thoughts" content="灵野的随想"></meta>
      </Head>
      <Header />
      <div className={styles.mask}>
        <main className={styles.main}>
          <div className={styles.thoughts}>
            {
              thoughts.map((item:any)=>{
                return <Think key={item._id} {...item}></Think>
              })
            }
          </div>
          <IdCard></IdCard>
        </main>
      </div>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const res = await api.thoughtList();
  return {
    props: { res },
  };
}

export default Thoughts;
