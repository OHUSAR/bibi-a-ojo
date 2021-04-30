import React from "react";

import { ReactComponent as TreeImg } from "../../images/tree.svg";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.header}>
      <div className={styles.secondaryTitle}>- 14. 8. 2021 -</div>
      <h1>Barbora & Ondrej</h1>
      <div className={styles.secondaryTitle}>Sa budu brat!</div>
      <TreeImg className={styles.tree} />
    </div>
  );
};

export default Home;
