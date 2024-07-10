// import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  const skillsItem = [
    {
      id: 1,
      skill: "Frontend Development",
      desc: "I'm a front-end developer with experience in building responsive and optimized sites",
      image: "image 2.png",
    },
    {
      id: 1,
      skill: "Mobile Development",
      desc: "I have experience in building mobile app using Flutter Framework",
      image: "image 3.png",
    },
    {
      id: 1,
      skill: "UI / UX",
      desc: "I have designed multiple landing pages and have created some designs as well",
      image: "image 4.png",
    },
  ];

  const renderSkills = (skillsItem) => (
    <li key={skillsItem.id} className={styles.list}>
      <img src={getImageUrl(skillsItem.image)} alt="" />
      <span>
        <h3>{skillsItem.skill}</h3>
        <p>{skillsItem.desc}</p>
      </span>
    </li>
  );

  return (
    <section id="about" className={styles.con}>
      <div className={styles.container} >
        <h2 className={styles.title}>ABOUT</h2>
        <div>
          <img src={getImageUrl("hero2.png")} alt="" className={styles.hero} />
          <ul className={styles.skillSect}>{skillsItem.map(renderSkills)}</ul>
        </div>
      </div>
    </section>
  );
};
