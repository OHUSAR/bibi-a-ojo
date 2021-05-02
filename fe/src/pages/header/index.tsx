import React from "react";

// import { ReactComponent as TreeImg } from "../../images/tree.svg";
// import img from "../../images/img1.jpg";

import styles from "./header.module.scss";

const Header: React.VFC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topPart}>
        <h1>
          <div>Bibi</div> <div>&</div> <div>Ojo</div>
        </h1>
        <div className={styles.text}>
          S radosťou Vám oznamujeme, že sa berieme!
        </div>
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.date}>
          <div>14</div>
          <div>08</div>
          <div>21</div>
        </div>
        <div className={styles.info}>
          Obrad sa uskutoční o&nbsp;15:00
          <br /> v&nbsp;stodole Zelený Deň, Bošáca.
        </div>
      </div>
    </div>
  );
};

export default Header;
