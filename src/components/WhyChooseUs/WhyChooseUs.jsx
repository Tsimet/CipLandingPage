import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import styles from "./WhyChooseUs.module.css";

function StatItem({ end }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} style={{}}>
      {inView ? <CountUp end={end} duration={2.5} /> : 0}
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section className={styles.reasons}>
      <div className={styles.reasons__overlay}>
        <h2 className={styles.reasons__heading}>Why Choose Us</h2>
        <div className={styles.reasons__container}>
          <div className={styles.reason}>
            <h3 className={styles.reason__number}>
              <StatItem end={70} />
              <span className={styles.reason__plus}>+</span>
            </h3>
            <nav className={styles.reason__description}>satisfied clients</nav>
          </div>
          <div className={styles.reason}>
            <h3 className={styles.reason__number}>
              <StatItem end={36} />
            </h3>
            <nav className={styles.reason__description}>years of expertise</nav>
          </div>
          <div className={styles.reason}>
            <h3 className={styles.reason__number}>
              <StatItem end={500} />
              <span className={styles.reason__plus}>+</span>
            </h3>
            <nav className={styles.reason__description}>projects completed</nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
