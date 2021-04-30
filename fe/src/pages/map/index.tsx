import React from "react";

import styles from "./map.module.scss";

import zelenyden from "../../images/img2.jpg";
import podtureckom from "../../images/podtureckom.jpg";
import diana from "../../images/diana.jpg";

const Map: React.FC = (props) => {
  return (
    <div className={styles.map}>
      <div className={styles.mapPart}>
        <div className={styles.div} style={{ top: 0, left: 0 }}>
          <img alt="zelenyden" src={zelenyden} className={styles.img} />
        </div>
        <div className={styles.info} style={{ top: 0, left: 200 }}>
          <div className={styles.title}>Zeleny den</div>
        </div>
        <div className={styles.div} style={{ top: 200, left: 400 }}>
          <img alt="podtureckom" src={podtureckom} className={styles.img} />
        </div>
        <div className={styles.info} style={{ top: 200, left: 600 }}>
          <div className={styles.title}>Penzion Pod Tureckom</div>
          <div className={styles.price}>25 &euro; </div>
          <a
            className={styles.website}
            href="https://www.penzionpodtureckom.com/"
          >
            https://www.penzionpodtureckom.com/
          </a>
        </div>
        <div className={styles.div} style={{ top: 400, left: 0 }}>
          <img alt="diana" src={diana} className={styles.img} />
        </div>
        <div className={styles.info} style={{ top: 400, left: 200 }}>
          <div className={styles.title}>Hotel Diana</div>
          <div className={styles.price}>25 &euro;</div>
          <a
            className={styles.website}
            href="http://www.hotel-diana.sk/index.php"
          >
            http://www.hotel-diana.sk/index.php
          </a>
        </div>

        <div className={styles.distance} style={{ top: 165, left: 250 }}>
          4.2 km (4 min)
        </div>
        <div className={styles.distance} style={{ top: 300, left: 210 }}>
          10.5 km (12 min)
        </div>
        <svg width="600" height="600">
          <line
            x1="199"
            y1="199"
            x2="401"
            y2="201"
            stroke-width="2"
            stroke="#c47865"
          />
          <line
            x1="199"
            y1="199"
            x2="199"
            y2="401"
            stroke-width="2"
            stroke="#c47865"
          />
        </svg>
      </div>
    </div>
  );
};

export default Map;
