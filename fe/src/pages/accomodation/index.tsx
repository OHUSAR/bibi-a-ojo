import React, { useState } from "react";

import styles from "./accomodation.module.scss";

import zelenyden from "../../images/img2.jpg";
import podtureckom from "../../images/podtureckom.jpg";
import diana from "../../images/diana.jpg";

import data from "./data.json";

interface AccomodationProps {
  name: string;
  price: React.ReactNode;
  distance: string;
  img: string;
  url?: string;
  people: string[];
}

const Accomodation: React.FC<AccomodationProps> = (props) => {
  const { name, price, url, distance, img, people } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accomodation}>
      <img src={img} alt={name} className={styles.img} />
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        {url ? (
          <a className={styles.website} href={url}>
            {url}
          </a>
        ) : null}
        <div className={styles.price}>{price}</div>
        <div className={styles.distance} style={{ top: 165, left: 250 }}>
          {distance}
        </div>
      </div>
      <div className={`${styles.people} ${open ? styles.open : ""}`}>
        {people.map((item) => (
          <div className={styles.item} key={item}>
            {item}
          </div>
        ))}
      </div>
      <button className={styles.btn} onClick={() => setOpen((prev) => !prev)}>
        {open ? "Zbaliť" : "Kto tu býva?"}
        &nbsp;
        {open ? <>&uarr;</> : <>&darr;</>}
      </button>
    </div>
  );
};

const Accomodations: React.FC = (props) => {
  return (
    <>
      <div className={styles.accomodationInfo}>
        <h2 className={styles.h2}>Ubytovanie</h2>
        <p>
          Ubytovanie pre všetkých hostí sme zarezervovali na mieste a v 2
          blízkych penziónoch. Ak máte záujem o ubytovanie, pošlite nám zálohu
          do konca júna a zvyšok si doplatíte sami na mieste.
        </p>
        <ol>
          <li>Z tejto stránky (alebo od nás) zistíte, kde budete bývať.</li>
          <li>
            Pošlete nám zálohu podľa typu ubytovania na{" "}
            <span className={styles.strong}>SK04 1100 0000 0026 1452 1651</span>
          </li>
          <li>
            Do poznámky zadajte:{" "}
            <span className={styles.strong}>
              "Svadba - Vaše Meno - počet osôb"
            </span>{" "}
            (napr. Svadba - Ondrej Husár - 2)
          </li>
          <li>
            Zálohu prosím zaplaťte{" "}
            <span className={styles.strong}>do konca júna.</span>
          </li>
          <li>
            V deň svadby sa ubytujete, na recepcií poviete svoje meno a
            doplatíte zvyšok.
          </li>
        </ol>
      </div>
      <div className={styles.accomodations}>
        <Accomodation
          name={"Zelený Deň"}
          img={zelenyden}
          people={data["zelenyden"]}
          price={
            <>
              10 &euro; / osoba za noc{" "}
              <span className={styles.strong}>(záloha 10 &euro;)</span>
            </>
          }
          distance="Na mieste konania"
        />
        <Accomodation
          name={"Penzión Pod Tureckom"}
          img={podtureckom}
          people={data["penzion"]}
          price={
            <>
              Cena: 25 &euro; / osoba za noc s raňajkami
              <br />
              <span className={styles.strong}>Záloha: 12.5 &euro;</span>
            </>
          }
          distance="4.2 km (4 min)"
          url="https://www.penzionpodtureckom.com/"
        />
        <Accomodation
          name={"Hotel Diana"}
          img={diana}
          people={data["diana"]}
          price={
            <>
              Cena: 25 &euro; / osoba za noc s raňajkami
              <br />
              <span className={styles.strong}>Záloha: 12.5 &euro;</span>
            </>
          }
          distance="10.5 km (12 min)"
          url="http://www.hotel-diana.sk/index.php"
        />
      </div>
    </>
  );
};

export default Accomodations;
