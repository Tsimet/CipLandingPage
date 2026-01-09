import styles from "./AboutUsContact.module.css";

export default function AboutUsContact() {
  return (
    <section className={styles.about__contact__wrapper}>
      <div className={styles.about__contact}>
        <h5>piqued your interest?</h5>
        <h4>Send us a message!</h4>
        <button>
          <a href="#contact">Contact Us</a>
        </button>
      </div>
    </section>
  );
}
