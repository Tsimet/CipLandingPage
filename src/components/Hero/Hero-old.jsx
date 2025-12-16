import styles from "./Hero.module.css";

import logo from "../../assets/images/logo.png";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__left}>hero left</div>
      <div className={styles.hero__right}>
        <img src={logo} alt="asdajksdadh" />
      </div>
    </div>
  );
}
