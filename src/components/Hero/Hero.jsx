import styles from "./Hero.module.css";
import logo from "../../assets/images/logo.png";
import heroVideo from "../../assets/video/hero__video.mp4";

export default function Hero() {
  return (
    <header className={styles.hero} id="hero">
      <video autoPlay muted loop className={styles.hero__video}>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className={styles.hero__overlay}></div>

      <div className={styles.hero__content}>
        <h1>Innovation and Quality</h1>
        <img src={logo} alt="CIP Logo" className={styles.hero__logo}></img>
        <h3>Realiable Partner In Industry</h3>
        <a href="#about" className={styles.btn__scroll}>
          More About Us
        </a>
      </div>
    </header>
  );
}
