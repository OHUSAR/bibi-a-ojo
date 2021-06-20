import React from "react";

import { Timeline, Event } from "react-timeline-scribble";
import styles from "../styles.module.scss";

const Transport: React.FC = (props) => {
  return (
    <div className={styles.sectionInfo}>
      <h2 className={styles.h2}>Preprava</h2>
      <p>
        Večer bude k dispozícií taxík, ktorý bude rozvážať hostí medzi svadbou a
        ubytovaniami. V rušnejších časoch odchádzania pravdepodobne budeme
        musieť doplniť kapacity zavolaním ďaľších taxíkov.
      </p>
      <p>
        Pre 52 ľudí bude možné využiť na prepravu na svadbu a z nej{" "}
        <strong>autobus.</strong>
      </p>
      <div className={styles.columns}>
        <div className={styles.column}>
          <Timeline>
            <Event
              interval="Sobota 11:00"
              title="🏡 ➡ 🏨"
              subtitle="Odchod z Bratislavy na miesto konania svadby. Po ceste vysadenie ubytovaných hostí na Hotel Diana a Penzión pod Tureckom."
            />
            <Event
              interval="Sobota 14:00"
              title="🏨 ➡ 👰🏼🤵🏼‍♂️"
              subtitle="Odvoz hostí z Hotelu Diana a z Penziónu pod Tureckom na miesto konania svadby."
            />
          </Timeline>
        </div>
        <div className={styles.column}>
          <Timeline>
            <Event
              interval="Nedeľa 10:00"
              title="🏨 ➡ 👰🏼🤵🏼‍♂️"
              subtitle="Odvoz hostí z Hotelu Diana a z Penziónu pod Tureckom ubytovaní na popravky."
            />
            <Event
              interval="Nedeľa 14:00"
              title="👰🏼 ➡ 🍻"
              subtitle="Odchod z Bošácej do Bratislavy na afterparty na Tyršovo Nábrežie - Sundeck."
            />
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Transport;
