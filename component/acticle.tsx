/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";
import styles from "../styles/acticle.module.css";
import React, { useState, useEffect } from "react";
import { IActicle } from "../types";
import Link from "next/Link";
import * as api from '../services/api'
const Acticle: React.FC<IActicle> = (props: IActicle) => {
  const [md, hendleMd] = useState("loading");
  const { _id, title, userName, type, browseNumber, content, pubulishTime } =
    props;
  return (
    <Link href={"/post/" + _id}>
      <a>
        <div className={styles.acticle}>
          <div className={styles.textContent}>
            <div className={styles.acticleTitle}>
              <div>{userName}</div>
              <div>{pubulishTime}</div>
              <div>{type}</div>
            </div>
            <h3 className={styles.acticleName}>{title}</h3>
            <div className={styles.introduce}>{content}</div>
            <div className={styles.visitor}>{browseNumber}</div>
          </div>
          <div className={styles.acticleImg}>
            <img src="/backgound.webp" alt=""></img>
          </div>
        </div>
      </a>
    </Link>
  );
};
  


export default Acticle;
