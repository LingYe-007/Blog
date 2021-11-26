/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";
import styles from "../styles/openSouce.module.css";
import { openSource } from "../types";
const OpenSouce: React.FC<openSource> = (props: openSource) => {
  const { image, title, introduce, status, github, preview, supplement } =
    props;
  return (
    <div className={styles.content}>
      {image ? (
        <a href={image}>
          <div className={styles.img}>
            <img src={image} alt="" />
          </div>
        </a>
      ) : (
        ""
      )}
      <div className={styles.preContent}>
        <h5>{title}</h5>
        <p>{introduce}</p>
        <span>
          项目状态:
          <span style={{ color: "rgba(59, 130, 246, .8)" }}> {status}</span>
        </span>
        <div className={styles.buttonList}>
          <button>
            <a target="_blank" rel="noreferrer" href={preview}>
              在线预览
            </a>
          </button>
          <button>
            <a target="_blank" rel="noreferrer" href={github}>
              GIHUB
            </a>
          </button>
        </div>
        {supplement}
      </div>
    </div>
  );
};

export default OpenSouce;
