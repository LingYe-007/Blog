/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";
import styles from "../styles/think.module.css";
import { thoughts } from "../types";

const Think: React.FC<thoughts> = (props: thoughts) => {
  const { img, userName, personLable, content, time } = props;
  return (
    <div className={styles.container}>
      <div className={styles.person}>
          <div>
          <img alt='' src='../public/avatar.png'></img>
          </div>
          <p>{userName}</p>
          <p>{personLable}</p>
      </div>
       <p>{content}</p>
       <p>{time}/</p>
    </div>
  );
};
export default Think;
