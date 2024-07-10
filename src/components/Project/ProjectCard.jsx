// import React from "react";
import styles from "./ProjectCard.module.css";
// import projects from "../../data/project.json";
import PropTypes from "prop-types";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { name, image, lang, desc, source },
}) => {
  return (
    <div className={styles.proItem}>
      <img className={styles.image} src={getImageUrl(image)} alt="" />
      <div className={styles.proContent}>
        <div className={styles.conTop}>
          <h5 className={styles.proName}>{name}</h5>
          <div className={styles.langCon}>
            {lang.map((langs, id) => {
              return (
                <p className={styles.proLang} key={id}>
                  {langs}
                </p>
              );
            })}
          </div>
          <p className={styles.proDesc}>{desc}</p>
        </div>
        <a className={styles.proSour} href={source}>
          Source
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    lang: PropTypes.arrayOf(PropTypes.string).isRequired,
    desc: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};
