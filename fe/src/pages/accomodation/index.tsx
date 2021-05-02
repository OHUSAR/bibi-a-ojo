import React from "react";

import styles from "./accomodation.module.scss";

import zelenyden from "../../images/img2.jpg";
import podtureckom from "../../images/podtureckom.jpg";
import diana from "../../images/diana.jpg";

interface AccomodationProps {
  name: string;
  price: React.ReactNode;
  distance: string;
  img: string;
  url?: string;
}

const Accomodation: React.FC<AccomodationProps> = (props) => {
  const { name, price, url, distance, img } = props;
  return (
    <div className={styles.accomodation}>
      <img src={img} alt={name} className={styles.img} />
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>{price}</div>
        {url ? (
          <a className={styles.website} href={url}>
            {url}
          </a>
        ) : null}
        <div className={styles.distance} style={{ top: 165, left: 250 }}>
          {distance}
        </div>
      </div>
    </div>
  );
};

const Map: React.FC = (props) => {
  return (
    <div className={styles.accomodations}>
      <Accomodation
        name={"Zelený Deň"}
        img={zelenyden}
        price={<>10 &euro; / noc</>}
        distance="Na mieste konania"
      />
      <Accomodation
        name={"Penzión Pod Tureckom"}
        img={podtureckom}
        price={<>25 &euro; / noc s raňajkami</>}
        distance="4.2 km (4 min)"
        url="https://www.penzionpodtureckom.com/"
      />
      <Accomodation
        name={"Hotel Diana"}
        img={diana}
        price={<>25 &euro; / noc s raňajkami</>}
        distance="10.5 km (12 min)"
        url="http://www.hotel-diana.sk/index.php"
      />
    </div>
  );
};

export default Map;
