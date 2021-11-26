/* eslint-disable react/no-children-prop */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../component/header";
import IdCard from "../../component/idCard";
import styles from "../../styles/post.module.css";
import * as api from "../../services/api";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../component/CodeBlock";
import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
// import { GetStaticPaths } from "next";
import { IActicle } from "../../types";

// ```jsx
const Post: NextPage = (props: any) => {
  const router = useRouter();
  const { md } = props;
  // console.log(md);
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.mask}>
        <main className={styles.main}>
          <div className={styles.acticles}>
            <div className={styles.author}></div>
            <ReactMarkdown
              children={md}
              renderers={{ CodeBlock }}
            ></ReactMarkdown>
          </div>
          <div className="navigation">
            <MarkdownNavbar  className="article-menu" source={md} />
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
  const md = await api.download(params.id);
  return {
    props: { md: md },
  };
}

export default Post;
