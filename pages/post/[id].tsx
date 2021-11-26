/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../component/header";
import styles from "../../styles/post.module.css";
import * as api from "../../services/api";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../component/CodeBlock";
import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { IActicle } from "../../types";

// ```jsx
const Post: NextPage = (props: any) => {
  const router = useRouter();
  const { md, acticle } = props;
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.mask}>
        <main className={styles.main}>
          <div className={styles.acticles}>
            <div className={styles.author}>
              <img src={acticle[0].img} alt=""></img>
              <div className={styles.user}>
                <span>
                  <b>{acticle[0].userName}</b>
                </span>
                <span
                  style={{ whiteSpace: "pre" }}
                >{`${acticle[0].pubulishTime}       阅读 ${acticle[0].browseNumber}`}</span>
              </div>
            </div>
            <h2>{acticle[0].title}</h2>
            <ReactMarkdown
              source={md}
              renderers={{
                code: CodeBlock,
              }}
            ></ReactMarkdown>
          </div>
          <div className="navigation">
            <MarkdownNavbar
              className={`article-menu ${styles.menu}`}
              source={md}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await (await api.acticleList()).data;
  const paths = res.map((item: IActicle) => {
    return `/post/${item._id}`;
  });
  return { paths, fallback: false };
}
export async function getStaticProps({ params }: any) {
  const { res } = params;
  const md = await api.download(params.id);
  const acticle = await api.acticleList({ _id: params._id });
  return {
    props: { md: md, acticle: acticle.data },
  };
}

export default Post;
