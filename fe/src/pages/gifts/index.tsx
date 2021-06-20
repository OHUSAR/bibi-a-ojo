import React from "react";

import styles from "../styles.module.scss";

const Gifts: React.FC = (props) => {
  return (
    <div className={styles.sectionInfo}>
      <h2 className={styles.h2}>Darčeky</h2>
      <div className={styles.noncenter}>
        <p>
          Drahí hostia, s kyticami či darmi si prosím nerobte starosti, kvetov
          tam bude dosť a doma všetko máme.
        </p>
        <p>
          Najviac nás potešia a pomôžu 💰 v akomkoľvek množstve.{" "}
          <strong>Ďakujeme!</strong>
        </p>
      </div>
    </div>
  );
};

export default Gifts;
