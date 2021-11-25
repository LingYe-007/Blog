import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../component/header";
import IdCard from "../../component/idCard";
import styles from "../../styles/post.module.css";
import * as api from "../../services/api";
import { GetStaticPaths } from "next";
import { IActicle } from "../../types";

const Post: NextPage = (props: any) => {
  console.log(props);
  const router = useRouter();
  const { _id } = router.query;
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <IdCard></IdCard>
      </main>
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async ({params:any}) => {
//   // ...
//   const _id = <params className="_id"></params>
//   return {
//     props:{ }
//   }
// }
export async function getStaticPaths() {
  const res = await (await api.acticleList()).data;
  const paths = res.map((item: IActicle) => {
  return  `/post/${item._id}`
  });
  return { paths, fallback: false };
}
export async function getStaticProps({ params }: any) {
  const res = await api.download(params.id);
  return {
    props: res,
  };
}

export default Post;
