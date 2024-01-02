import React from "react";
import styles from "./Skills.module.css";
import skills from "../../skills.json";
import { getImageUrl } from "../../utils";

const Skills = () => {
  return (
    <section className={styles.container} id="Skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt=""
                    className={styles.img}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
