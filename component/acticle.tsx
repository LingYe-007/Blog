/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";
import styles from '../styles/acticle.module.css'

const Acticle:NextComponentType =()=>{
    return (
        <div className={styles.acticle}>
            <div className={styles.textContent}>
            <div className={styles.acticleTitle}>
              <div>name</div>
              <div>time</div>
              <div>type</div>
            </div>
            <h3 className={styles.acticleName}>acticle.title</h3>
            <div className={styles.introduce}>content</div>
            <div className={styles.visitor}>number</div>
            </div>
            <div className={styles.acticleImg}>
              <img src='/backgound.webp' alt=''></img>
            </div>
          </div>
    )
}

export default Acticle