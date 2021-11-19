import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../component/header";
import IdCard from "../../component/idCard";
import styles from "../../styles/post.module.css";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <IdCard></IdCard>
      </main>
    </div>
  );
};

export default Post;
