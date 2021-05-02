import React from "react";

import styles from "./home.module.scss";
import Accomodattions from "../accomodation";
import Header from "../header";

const Home: React.VFC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
      </div>

      <div className={styles.wrapper2}>
        <Accomodattions />
      </div>
      <footer className={styles.wrapper3}>
        <button>Nemozem dojst</button>
      </footer>
    </>
  );
};

export default Home;
