import React from "react";

import styles from "../styles.module.scss";

const Dresscode: React.FC = (props) => {
  return (
    <>
      <div className={styles.sectionInfo}>
        <h2 className={styles.h2}>Dresscode</h2>
        <div className={styles.noncenter}>
          <p>
            Oblečte sa tak aby vám bolo prijemne, nebolo príliš teplo a hlavne
            ste vydržali tancovať do rána :-)
          </p>
          <p>
            Obrad a hostina budú prebiehať v sade, záhrade s trávnikom a v
            priestoroch stodoly s hlinenou podlahou.
          </p>
          <p>
            Dámam <strong>neodporúčame ihličkové opätky</strong>. Páni nemusia
            mať saká.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dresscode;
