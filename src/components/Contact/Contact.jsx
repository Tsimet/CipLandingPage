import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__info}>
        <span className={styles.contact__heading}>Get In touch!</span>
        <p className={styles.contact__description}>
          Your inquiries are important to us. To help us route your request to
          the appropriate department, please provide as much detail as possible.
          We aim to respond to all professional inquiries promptly and
          thoroughly.
        </p>
      </div>
      <form action="" className={styles.contact__form}>
        <div className={styles.row}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.contact__name}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.contact__email}
          />
        </div>
        <input
          type="text"
          placeholder="Your Subject"
          className={styles.contact__subject}
        />
        <textarea
          name="Message"
          id=""
          placeholder="Your Message"
          className={styles.contact__message}
        ></textarea>
        <input
          type="submit"
          className={styles.contact__submit}
          value="Send Message"
        />
      </form>
    </section>
  );
}
export default Contact;
