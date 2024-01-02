import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to Connect !</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:gargsaket872@gmail.com">gargsaket872@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a href="https://linkedin.com/in/saket-garg-31b20a193">
            linkedin.com/Saket281
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/saket281">Github.com/Saket281</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
