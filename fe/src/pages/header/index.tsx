import React from "react";

import { ReactComponent as TreeImg } from "../../images/tree.svg";
import img from "../../images/img1.jpg";

import styles from "./header.module.scss";

const Header: React.VFC = () => {
  return (
    <div className={styles.header}>
      <img src={img} alt="stodola" className={styles.image} />
      <div className={styles.text}>
        <h1>Bibi & Ojo</h1>
        <div className={styles.date}>
          <div>14</div>
          <div>08</div>
          <div>21</div>
        </div>
      </div>
      <TreeImg className={styles.tree} />
    </div>
  );
};

export default Header;
