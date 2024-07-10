import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi! I'm Clarawita
        </h1>
        <p className={styles.desc}>As a first-year computer science student at Binus University @Alam Sutera,
          my passion lies in web development, particularly in Frontend Development, where I find joy in bringing beautiful and user-friendly designs
          to life.</p>
          <a href="mailto:clarawita28@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero.png")} alt="" className={styles.heroImg}/>
      <div className={styles.topBlurry}></div>
      <div className={styles.bottomBlurry}></div>
    </section>
  )
}
