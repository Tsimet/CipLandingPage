import styles from "./WhyChooseUs.module.css";

function WhyChooseUs() {
  return (
    <section className={styles.reasons}>
      <div className={styles.reasons__overlay}>
        <h2 className={styles.reasons__heading}>Why Choose Us</h2>
        <div className={styles.reasons__container}>
          <div className={styles.reason}>
            <h3 className={styles.reason__number}>
              40<span className={styles.reason__plus}>+</span>
            </h3>
            <nav className={styles.reason__description}>satisfied clients</nav>
          </div>
          <div className={styles.reason}>
            <h3 className={styles.reason__number}>
              37<span className={styles.reason__plus}></span>
            </h3>
            <nav className={styles.reason__description}>years of expertise</nav>
          </div>
          <div className={styles.reason}>
            <h3 className={styles.reason__number}>
              100<span className={styles.reason__plus}>+</span>
            </h3>
            <nav className={styles.reason__description}>projects completed</nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
