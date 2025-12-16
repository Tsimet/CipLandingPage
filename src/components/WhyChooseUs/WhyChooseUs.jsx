import styles from "./WhyChooseUs.module.css";

function WhyChooseUs() {
  return (
    <section className={styles.reasons}>
      <h2 className={styles.reasons__heading}>Why Choose Us</h2>
      <div className={styles.reasons__container}>
        <div className={styles.reason}>
          <h3 className={styles.reason__number}>100+</h3>
          <nav className={styles.reason__description}>satisfied clientss</nav>
        </div>
        <div className={styles.reason}>
          <h3 className={styles.reason__number}>100+</h3>
          <nav className={styles.reason__description}>satisfied clientss</nav>
        </div>
        <div className={styles.reason}>
          <h3 className={styles.reason__number}>100+</h3>
          <nav className={styles.reason__description}>satisfied clientss</nav>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
