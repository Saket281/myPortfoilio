import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saket Garg</h1>
        <p className={styles.description}>
          I'm a Front-end developer focused on crafting clean & user-friendly
          experiences , I am passionate about creating stunning and responsive
          web experiences
        </p>
        <a href="mailto:gargsaket872@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
