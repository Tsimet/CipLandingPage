import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.about__description}>
        <h2 className={styles.about__heading}>who are we</h2>
        <h4 className={styles.about__headText}>
          And how we got where we are now
        </h4>
      </div>
      <div className={styles.about__content}>
        <div className={styles.about__square}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={styles.about__icon}
          >
            <path d="M73.3 192C100.8 99.5 186.5 32 288 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-65.6 0-122 39.5-146.7 96L272 192c13.3 0 24 10.7 24 24s-10.7 24-24 24l-143.2 0c-.5 5.3-.8 10.6-.8 16s.3 10.7 .8 16L272 272c13.3 0 24 10.7 24 24s-10.7 24-24 24l-130.7 0c24.7 56.5 81.1 96 146.7 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-101.5 0-187.2-67.5-214.7-160L40 320c-13.3 0-24-10.7-24-24s10.7-24 24-24l24.6 0c-.7-10.5-.7-21.5 0-32L40 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l33.3 0z" />
          </svg>
          <h5 className={styles.about__square__heading}>significant savings</h5>
          <p className={styles.about__square__description}>
            Provided to our esteemed customers through designing and consulting
            with partners and paying particular attention to choosing the type
            and method of installation of the heating and ventilation system
          </p>
        </div>
        <div className={styles.about__square}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={styles.about__icon}
          >
            <path d="M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          <h5 className={styles.about__square__heading}>
            The Thirty-year experience
          </h5>
          <p className={styles.about__square__description}>
            That has contributed to the advancement of activity as a
            recommendation to the largest foreign investors in the country and
            abroad, such as Fiat, Leoni, Henkel, Michelin, Good Year ...
          </p>
        </div>
        <div className={styles.about__square}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={styles.about__icon}
          >
            <path d="M256 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm96 312c0 25-12.7 47-32 59.9l0 92.1c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-92.1C172.7 359 160 337 160 312l0-40c0-53 43-96 96-96s96 43 96 96l0 40zM96 32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm16 240l0 32c0 32.5 12.1 62.1 32 84.7l0 75.3c0 1.2 0 2.5 .1 3.7-8.5 7.6-19.7 12.3-32.1 12.3l-32 0c-26.5 0-48-21.5-48-48l0-56.6C12.9 364.4 0 343.7 0 320l0-32c0-53 43-96 96-96 12.7 0 24.8 2.5 35.9 6.9-12.6 21.4-19.9 46.4-19.9 73.1zM368 464l0-75.3c19.9-22.5 32-52.2 32-84.7l0-32c0-26.7-7.3-51.6-19.9-73.1 11.1-4.5 23.2-6.9 35.9-6.9 53 0 96 43 96 96l0 32c0 23.7-12.9 44.4-32 55.4l0 56.6c0 26.5-21.5 48-48 48l-32 0c-12.3 0-23.6-4.6-32.1-12.3 0-1.2 .1-2.5 .1-3.7zM416 32a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
          </svg>
          <h5 className={styles.about__square__heading}>Our team</h5>
          <p className={styles.about__square__description}>
            Over 250 workers in the mechanical installations sector, among which
            there are 30 engineers who improve their enormous experience and
            knowledge every day at construction sites throughout the world
          </p>
        </div>
        <div className={styles.about__square}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className={styles.about__icon}
          >
            >
            <path d="M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z" />
          </svg>

          <h5 className={styles.about__square__heading}>
            Industrial machinery
          </h5>
          <p className={styles.about__square__description}>
            We have worked on equipment installation in tire and chemical
            industry. The works includes equipment installation in production
            sectors from the big silos on the beginning of the process, trough
            mixing systems, batch of machinery, extruders, cutters, up to the
            presses on the end of the production lines
          </p>
        </div>
        <div className={styles.about__square}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className={styles.about__icon}
          >
            <path d="M372 143.9L172.7 40.2c-8-4.1-17.3-4.8-25.7-1.7l-41.1 15c-10.3 3.7-13.8 16.4-7.1 25L200.3 206.4 100.1 242.8 40 206.2c-6.2-3.8-13.8-4.5-20.7-2.1L3 210.1c-9.4 3.4-13.4 14.5-8.3 23.1l53.6 91.8c15.6 26.7 48.1 38.4 77.1 27.8l12.9-4.7 0 0 398.4-145c29.1-10.6 44-42.7 33.5-71.8s-42.7-44-71.8-33.5L372 143.9zM32.2 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-512 0z" />
          </svg>
          <h5 className={styles.about__square__heading}>
            Relocation of the industrial equipment
          </h5>
          <p className={styles.about__square__description}>
            Our engineering, mechanical and electrical teams are working on the
            relocation of the complete production lines and factories inside of
            the same facility or on completely different locations.
          </p>
        </div>
        <div className={styles.about__square}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={styles.about__icon}
          >
            <path d="M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
          </svg>
          <h5 className={styles.about__square__heading}>Regulation systems</h5>
          <p className={styles.about__square__description}>
            Design, documentation preparation, production and installation of
            the diverse system for the dust, air, steam exhausting and
            regulation of the moisture according to the clients' requests are
            also a part of our scope of works
          </p>
        </div>
      </div>
      <div className={styles.about__contact}>
        <h5>piqued your interest?</h5>
        <h4>Send us a message!</h4>
        <button>Contact Us</button>
      </div>
    </section>
  );
}

export default AboutUs;
