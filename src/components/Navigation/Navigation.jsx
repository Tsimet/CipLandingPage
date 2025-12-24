import styles from "./Navigation.module.css";
import logo from "../../assets/images/logo.png";

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <a href="#hero" className={styles.navbar__brand}>
          <img src={logo} alt="Cip Prokuplje" className={styles.logo}></img>
          <span className={styles.logo__name}>Cip Prokuplje</span>
        </a>

        <button className={styles.menu__toggle} aria-label="Toggle navigation">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={styles.nav__links}>
          <li>
            {/* <a href="http://cipprokuplje.rs" class="lang-switch">
              Српски
            </a> */}
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
