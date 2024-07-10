// import React from 'react'
import styles from "./Project.module.css";
import projects from "../../data/project.json";
// import { getImageUrl } from "../../utils";
import {ProjectCard} from "./ProjectCard";

function Project() {
  return (
    <section className={styles.container} id="project">
      <h2>PROJECTS</h2>
      <div className={styles.content}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project = {project}/>;
        })}
      </div>
    </section>
  );
}

export default Project;
