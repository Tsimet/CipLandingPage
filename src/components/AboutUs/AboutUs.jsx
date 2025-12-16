import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.about}>
      <div className={styles.about__description}>
        <h2 className={styles.about__heading}>who are we</h2>
        <h4 className={styles.about__headText}>
          cime se bavimo, koje usluge pruzamo...
        </h4>
      </div>
      <div className={styles.about__content}>
        <div className={styles.about__square}>
          <h5 className={styles.about__square__heading}>nesto</h5>
          <p className={styles.about__square__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            provident deserunt sint reprehenderit nam dicta nostrum, magni
            pariatur officia esse maiores! Est nobis ut voluptatibus quos minus,
            eaque consequuntur ipsum!
          </p>
        </div>
        <div className={styles.about__square}>
          <h5 className={styles.about__square__heading}>nesto</h5>
          <p className={styles.about__square__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            provident deserunt sint reprehenderit nam dicta nostrum, magni
            pariatur officia esse maiores! Est nobis ut voluptatibus quos minus,
            eaque consequuntur ipsum!
          </p>
        </div>
        <div className={styles.about__square}>
          <h5 className={styles.about__square__heading}>nesto</h5>
          <p className={styles.about__square__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            provident deserunt sint reprehenderit nam dicta nostrum, magni
            pariatur officia esse maiores! Est nobis ut voluptatibus quos minus,
            eaque consequuntur ipsum!
          </p>
        </div>
        <div className={styles.about__square}>
          <h5 className={styles.about__square__heading}>nesto</h5>
          <p className={styles.about__square__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            provident deserunt sint reprehenderit nam dicta nostrum, magni
            pariatur officia esse maiores! Est nobis ut voluptatibus quos minus,
            eaque consequuntur ipsum!
          </p>
        </div>
        <div className={styles.about__square}>
          <h5 className={styles.about__square__heading}>nesto</h5>
          <p className={styles.about__square__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            provident deserunt sint reprehenderit nam dicta nostrum, magni
            pariatur officia esse maiores! Est nobis ut voluptatibus quos minus,
            eaque consequuntur ipsum!
          </p>
        </div>
        <div className={styles.about__square}>
          <h5 className={styles.about__square__heading}>nesto</h5>
          <p className={styles.about__square__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            provident deserunt sint reprehenderit nam dicta nostrum, magni
            pariatur officia esse maiores! Est nobis ut voluptatibus quos minus,
            eaque consequuntur ipsum!
          </p>
        </div>
      </div>
      <div className={styles.about__contact}>
        <h5>piqued your interest?</h5>
        <h4>contact us</h4>
        <button>contact</button>
      </div>
    </section>
  );
}

export default AboutUs;
