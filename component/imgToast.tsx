/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";
import React, { forwardRef } from "react";
import { useState,useImperativeHandle} from "react";
import styles from "../styles/imgToast.module.css";

interface img {
  ref:any,
  src: string;
}

const ImgToast: React.FC<img> = (props: any) => {
  const { src,ref } = props;
  const changeShow = () => {
    setIsShow(!isShow);
  };
  useImperativeHandle(
    ref,
    () => ({
      changeShow:()=>{setIsShow(!isShow)}
    }),[]
  )
  const [isShow, setIsShow] = useState(false);
  return isShow ? (
    <div className={styles.content}>
      <i
        className={styles.close}
        onClick={() => {
          changeShow;
        }}
      >
        ×
      </i>
      <div className={styles.mask}></div>
      <img src={src} alt="伍勋高的QQ二维码"></img>
    </div>
  ) : (
    <div></div>
  );
};

export default ImgToast;
