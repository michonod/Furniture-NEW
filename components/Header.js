import React from "react";
import Link from "next/link";
import classes from "../styles/Header.module.css";
import "antd/dist/antd.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.navbar}>
        <div className={classes.navbarLeft}>
          <Link href="/">
            <Image src="/logo.png" width={60} height={40}></Image>
          </Link>
          <Link href="/">
            <h1>Furniture Creations</h1>
          </Link>
        </div>
        <div className={classes.navbarRight}>
          <ul>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/projects">
              <li>Projects</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
