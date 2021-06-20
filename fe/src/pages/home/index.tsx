import React from "react";

import styles from "./home.module.scss";
import Accomodattions from "../accomodation";
import Header from "../header";
import Transport from "../transport";
import Parking from "../parking";
import Gifts from "../gifts";
import Dresscode from "../dresscode";
import Program from "../program";

const Home: React.VFC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
      </div>

      <div className={styles.wrapper2}>
        <Accomodattions />
      </div>

      <div className={styles.wrapper3}>
        <Parking />
      </div>

      <div className={styles.wrapper4}>
        <Transport />
      </div>

      <div className={styles.wrapper5}>
        <Dresscode />
      </div>

      <div className={styles.wrapper6}>
        <Program />
      </div>

      <div className={styles.wrapper7}>
        <Gifts />
      </div>

      <footer className={styles.wrapper8}>Bibi & Ojo</footer>
    </>
  );
};

export default Home;
