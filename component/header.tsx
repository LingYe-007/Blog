import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/Link";
import { useRouter } from "next/router";

interface childData {
  current: string;
}

const Header: NextComponentType = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Image alt="" src="/avatar.png" width="34" height="34"></Image>
          <i>LingYe</i>
          <nav>
            <Link href="/">
              <a className={router.pathname == "/" ? styles.active : ""}>
                {" "}
                首页
              </a>
            </Link>
            <Link href="/works">
              <a className={router.pathname === "/works" ? styles.active : ""}>
                开源作品
              </a>
            </Link>
            <Link href="/aboutMe">
              <a
                className={router.pathname === "/aboutMe" ? styles.active : ""}
              >
                关于我
              </a>
            </Link>
            <Link href="/thoughts">
              <a
                className={router.pathname === "/thoughts" ? styles.active : ""}
              >
                随想
              </a>
            </Link>
            <Link href="/resume">
              <a className={router.pathname == "/resume" ? styles.active : ""}>
                简历
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
