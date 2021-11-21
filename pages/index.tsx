/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import styles from "../styles/Home.module.css";
import IdCard from "../component/idCard";
import Acticle from "../component/acticle";
import * as api from '../services/api'

const project = {
  id:"123",
  title: "小作文",
  pubulishTime:"123",
  type:'1232133',
  userName: "伍勋高",
  content:"123",
  browseNumber:1231
};

const Home: NextPage = (props:any) => {
  const acticles = props.res.data
  console.log(acticles)
  return (
    <div className={styles.container}>
      <Head>
        <title>LingYe-Code Builde World</title>
        <meta
          name="description"
          content="灵野的个人博客,用来记录成长的每一天"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className={styles.mask}>
      <main className={styles.main}>
        <div className={styles.acticles}>
          {acticles.map((item:any)=>{return <Acticle {...item} key={item.id}></Acticle>})}
          {/* <Acticle {...project}></Acticle> */}
        </div>
        <IdCard></IdCard>
      </main>
      </div>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const res = await api.acticleList();
  return {
    props: { res },
  };
}

export default Home;
