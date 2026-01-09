import styles from "./Hero.module.css";
import logo from "../../assets/images/logo.png";
import logo__small from "../../assets/images/logo-old.png";
import heroVideo from "../../assets/video/hero__video.mp4";

export default function Hero() {
  return (
    <header className={styles.hero} id="hero">
      <video autoPlay muted loop className={styles.hero__video}>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className={styles.hero__overlay}></div>

      <div className={styles.hero__content}>
        <h1>relocation and installation</h1>
        {/* <img src={logo} alt="CIP Logo" className={styles.hero__logo}></img> */}
        <picture className={styles.hero__logo}>
          <source media="(max-width: 780px)" srcSet={logo__small} />
          <img
            src={logo}
            alt="Company Logo"
            style={{ width: "auto" }}
            className={styles.hero__logo}
          />
        </picture>
        <h3>Realiable Partner In Industry</h3>
        <a href="#about" className={styles.btn__scroll}>
          More About Us
        </a>
      </div>
    </header>
  );
}
