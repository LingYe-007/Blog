/* eslint-disable @next/next/no-img-element */
import styles from "../styles/think.module.css";
import { thoughts } from "../types";

const Think: React.FC<thoughts> = (props: thoughts) => {
  const { img, userName, personLable, content, time } = props;
  return (
    <div className={styles.container}>
      <div className={styles.person}>
          <img
            alt=""
            src="/avatar.png"
          ></img>
        <div className={styles.mine}>
        <p><b>{userName}</b></p>
        <p>{personLable}</p>
        </div>
      </div>
      <p>{content}</p>
      <p>发布于 {time}/</p>
    </div>
  );
};
export default Think;
