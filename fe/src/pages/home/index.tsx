import React from "react";

import styles from "./home.module.scss";
import WeddingMap from "../map";
import Header from "../header";

const Home: React.VFC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
      </div>

      <div className={styles.wrapper2}>
        <WeddingMap />
      </div>
      <footer className={styles.wrapper3}>
        <button>Nemozem dojst</button>
      </footer>
    </>
  );
};

export default Home;
