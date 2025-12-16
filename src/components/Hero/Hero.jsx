import React from "react";
import styles from "./Hero.module.css";

// 1. Import the logo and the hero image
import logoImage from "../../assets/images/logo.png"; // Assuming you have a briiv logo file

//prebaci ga
const HeroNavigation = () => (
  <nav className={styles["hero-nav"]}>
    <ul className={styles["hero-nav__list"]}>
      <li className={styles["hero-nav__item"]}>
        <a href="#about" className={styles["hero-nav__link"]}>
          <span className={styles["hero-nav__dot"]}></span>
          ABOUT US
        </a>
      </li>
      <li className={styles["hero-nav__item"]}>
        <a href="#technology" className={styles["hero-nav__link"]}>
          <span className={styles["hero-nav__dot"]}></span>
          TECHNOLOGY
        </a>
      </li>
      <li className={styles["hero-nav__item"]}>
        <a
          href="#order"
          className={`${styles["hero-nav__link"]} ${styles["hero-nav__link--cta"]}`}
        >
          ORDER
        </a>
      </li>
    </ul>
  </nav>
);

export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* --- Left Content Block --- */}
      <div className={styles["hero__left-block"]}>
        {/* Logo and Navigation */}
        <header className={styles["hero__header"]}>
          {/* Using a placeholder text for the logo based on the image */}
          <span className={styles["hero__logo"]}>briiv</span>
          <HeroNavigation />
        </header>

        {/* Hero Content */}
        <div className={styles["hero__content"]}>
          <h1 className={styles["hero__title"]}>
            FRESH AIR THAT DOESN'T COST THE EARTH
          </h1>
          <p className={styles["hero__subtitle"]}>
            The Air Filter. Powered by Moss, Coconuts and NASA's Favourite
            Sheep.
          </p>

          {/* Explore Button */}
          <a href="#explore" className={styles["hero__explore-btn"]}>
            EXPLORE
            <span className={styles["hero__arrow"]}></span>
          </a>
        </div>

        {/* Note: The background image (moss) is handled by CSS in the styles['hero__left-block'] */}
      </div>

      {/* --- Right Product Block --- */}
      <div className={styles["hero__right-block"]}>
        <img
          src={logoImage}
          alt="Briiv Air Filter Product"
          className={styles["hero__product-img"]}
        />
      </div>
    </div>
  );
}
