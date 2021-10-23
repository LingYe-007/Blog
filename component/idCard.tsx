/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/idCard.module.css";
const IdCard: NextComponentType = () => {
  return (
    <div className={styles.content}>
      <img
        className={styles.backImg}
        width="100%"
        height="100"
        src="/backgound.webp"
        alt=""
      ></img>
      <div className={styles.person}>
        <p>灵野</p>
        <div className={styles.img}>
          {" "}
          <img src="/avatar.png" alt=""></img>
        </div>
      </div>
      <div className={styles.acticle}>
        <p>30</p>
        <p>文章数</p>
      </div>
      <div className={styles.social}>
        <div>
          <span>社交账号</span>
        </div>
      </div>
      <div className={styles.contact}>
        <a title=''>
          <i className={`${styles.iconGithub} ${styles.iconfont}`}></i>
        </a>
        <a>
          <i className={`${styles.iconQQ} ${styles.iconfont}`}></i>
        </a>
        <a>
          {" "}
          <i className={`${styles.iconJueJin} ${styles.iconfont}`}></i>
        </a>
      </div>
      <div className={styles.visitor}>
        <div>网站访问数:1234</div>
      </div>
    </div>
  );
};

export default IdCard;
