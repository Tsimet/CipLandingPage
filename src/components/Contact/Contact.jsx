import { useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sava_test",
        "template_deh8esi",
        form.current,
        "VndQg4cRHxTzGV3pw"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
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
      <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>
        <div className={styles.row}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.contact__name}
            name="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.contact__email}
            name="email"
          />
        </div>
        <input
          type="text"
          placeholder="Your Subject"
          className={styles.contact__subject}
        />
        <textarea
          id=""
          placeholder="Your Message"
          className={styles.contact__message}
          name="message"
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
