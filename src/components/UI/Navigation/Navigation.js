import styles from "./Navigation.module.css";
import React, { useState } from "react";

const Navigation = () => {
  const [navState, setNavState] = useState(false);

  const toggleMobileNav = () => {
    setNavState(!navState);
  };

  return (
    <div className={styles.nav}>
      <h3>Bradley Owens</h3>
      <div className={navState ? styles.open : styles.links}>
        <a className={styles.link} href="#about">
          About
        </a>
        <a className={styles.link} href="#skills">
          Skills
        </a>
        <a className={styles.link} href="#projects">
          Projects
        </a>
        <a className={styles.link} href="#contact">
          Contact
        </a>
      </div>

      <div className={styles.hamburger} onClick={toggleMobileNav}>
        <div
          className={navState ? styles["opened-hamburger1"] : styles.line}
        ></div>
        <div
          className={navState ? styles["opened-hamburger2"] : styles.line}
        ></div>
        <div
          className={navState ? styles["opened-hamburger3"] : styles.line}
        ></div>
      </div>
    </div>
  );
};

export default Navigation;
