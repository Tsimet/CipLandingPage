import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__info}>
        <span className={styles.contact__heading}>Get In touch!</span>
        <p className={styles.contact__description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
          inventore! Id reiciendis eaque dolorum est harum, recusandae itaque
          ducimus unde consequatur cumque iusto quos quas veniam officiis
          tenetur laboriosam corporis repellat esse voluptate provident qui
          culpa. Culpa ullam aliquam iusto.
        </p>
      </div>
      <form action="" className={styles.contact__form}>
        <div className={styles.row}>
          <input
            type="text"
            placeholder="your name"
            className={styles.contact__name}
          />
          <input
            type="email"
            placeholder="email"
            className={styles.contact__email}
          />
        </div>
        <input
          type="text"
          placeholder="subject"
          className={styles.contact__subject}
        />
        <textarea
          name="Message"
          id=""
          placeholder="your message"
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
