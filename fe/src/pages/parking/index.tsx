import React from "react";

import styles from "../styles.module.scss";

const Parking: React.FC = (props) => {
  return (
    <div className={styles.sectionInfo}>
      <h2 className={styles.h2}>Parkovanie</h2>
      <div>
        <p>Na mieste konania svadby sa nachádza parkovisko s 20 státiami.</p>
        <p>
          V blízskoti konania svadby sa pri kostole nachádza parkovisko, kde
          taktiež môžete bezplatne zastať a nechať svoje auto.
        </p>
        <p>Ubytovania majú svoje parkoviská s dostatočnou kapacitou.</p>
      </div>
    </div>
  );
};

export default Parking;
