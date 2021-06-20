import React from "react";
import { Timeline, Event } from "react-timeline-scribble";

import styles from "../styles.module.scss";

const Program: React.FC = (props) => {
  return (
    <div className={styles.sectionInfo}>
      <div className={styles.timeline}>
        <h2 className={styles.h2}>Program</h2>

        <Timeline>
          <Event interval="15:00" title="👰🏼🤵🏼‍♂️" subtitle="Svadobný obrad" />
          <Event
            interval="15:30 - 17:30"
            title="🤝🎻"
            subtitle="Gratulácie, Muzička"
          />
          <Event interval="17:30" title="🍖🥗" subtitle="Večera" />
          <Event interval="23:00" title="👯‍♀️" subtitle="Čepčenie" />
        </Timeline>
      </div>
    </div>
  );
};

export default Program;
