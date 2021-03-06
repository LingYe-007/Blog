import type { NextPage } from "next";
import Head from "next/head";
import Header from "../component/header";
import styles from "../styles/works.module.css";
import OpenSouce from "../component/openSouce";
import AboutMe from "./aboutMe";
import IdCard from "../component/idCard";
import * as api from "../services/api";

const project = {
  id: "123",
  image:
    "https://ks3-cn-beijing.ksyuncs.com/lingye-space/image-20210924213538155.png",
  title: "校庆项目",
  introduce: "基于微信小程序开发的Ant-deSign",
  status: "维护中",
  github: "xxx",
  preview: "hahah",
  supplement: "该项目是大二完成",
};

const Works: NextPage = (props: any) => {
  // console.log(props)
  const works = props.res.data;
  console.log(works);
  return (
    <div className={styles.container}>
      <Head>
        <title>LingYe-Thoughts</title>
        <meta name="thoughts" content="灵野的随想"></meta>
      </Head>
      <Header />
      <div className={styles.mask}>
        <main className={styles.main}>
          <div className={styles.projects}>
            {works.map((item: any) => {
              return <OpenSouce key={item._id} {...item}></OpenSouce>;
            })}
          </div>
          <IdCard />
        </main>
      </div>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const res = await api.openSourceList();
  return {
    props: { res },
  };
}

export default Works;
