import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import skills from "../../data/skillsEx.json";
import history from "../../data/historyEx.json";
// import React from "react";

function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>EXPERIENCE</h2>
      <div className={styles.content}>
        <div className={styles.leftC}>
          {skills.map((skills, id) => {
            return (
              <div key={id} className={styles.skillItem}>
                <img
                  src={getImageUrl(skills.image)}
                  alt={skills.title}
                  className={styles.imageSkill}
                />
                <h4>{skills.title}</h4>
              </div>
            );
          })}
        </div>
        <div className={styles.rightC}>
          {history.map((history, id) => {
            return (
              <div key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(history.image)}
                  alt={`${history.company} Logo`}
                  className={styles.imglogo}
                />
                <div className={styles.contentHist}>
                  <h4>{history.role}</h4>
                  <h6>
                    <span>{history.company}</span> | {history.date}
                  </h6>
                  <ul className={styles.list}>
                    {history.list.map((list, id) => {
                      return <li key={id}>{list}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
