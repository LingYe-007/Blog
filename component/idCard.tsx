/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";
import { useState, useRef } from "react";
import styles from "../styles/idCard.module.css";
const IdCard: NextComponentType = () => {
  const childRef = useRef(null);
  // const changeShow = childRef.current.changeShow
  return (
    <div className={styles.column}>
      <div className={styles.content}>
        <img
          className={styles.backImg}
          width="100%"
          height="100"
          src="/backgound.webp"
          alt=""
        ></img>
        <div className={styles.person}>
          <p className={styles.name}>灵野</p>
          <div className={styles.label}>
            管什么真理无穷,进一步<br></br>
            有进一步的欢喜
          </div>
          <div className={styles.img}>
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
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/LingYe-007"
            title="LingYe的GitHub仓库"
          >
            <i className={`${styles.iconGithub} ${styles.iconfont}`}></i>
          </a>
          <a>
            <i
              onClick={() => {}}
              className={`${styles.iconQQ} ${styles.iconfont}`}
            ></i>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://juejin.cn/user/967192653870664"
            title="LingYe的掘金主页"
          >
            {" "}
            <i className={`${styles.iconJueJin} ${styles.iconfont}`}></i>
          </a>
        </div>
        <div className={styles.visitor}>
          <div>网站访问数:1234</div>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
