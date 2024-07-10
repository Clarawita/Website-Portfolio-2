// import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const contactData = [
    {
      image: "image 12.svg",
      data: "clarawita28@gmail.com",
      link: "mailto: clarawita28@gmail.com"
    },
    {
      image: "image 13.svg",
      data: "linkedin.com/clarawita",
      link: "https://www.linkedin.com/in/clarawita/"
    },
    {
      image: "image 14.svg",
      data: "github.com/Clarawita",
      link: "https://github.com/Clarawita"
    },
  ];

  return (
    <section className={styles.container} id="contact">
      <div className={styles.sec1}>
        <h1>Contact Me</h1>
        <h3>Feel free to reach out!</h3>
      </div>
      <ul className={styles.sec2}>
        {contactData.map((contacts, id) => {
          return (
            <a key={id} href={contacts.link} target="_blank">
              <li className={styles.list}>
                <img src={getImageUrl(contacts.image)} alt="" />
                <p>{contacts.data}</p>
              </li>
            </a>
          );
        })}
      </ul>
    </section>
  );
};
