import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt=""
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with a knack for building captivating
                user interfaces using React.js. I blend design thinking with
                coding expertise to create seamless and visually appealing web
                experiences. Let's transform ideas into interactive realities!
                Recent graduate with a BE from Sir M Visvesvaraya Institute of
                Technology, VTU. Passionate about applying my Frontend
                development skills to real-world challenges. Open to exciting
                opportunities and collaborations! .
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
