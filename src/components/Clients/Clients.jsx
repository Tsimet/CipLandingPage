import styles from "./Clients.module.css";

import goodyear from "../../assets/images/goodyear.png";
import leoni from "../../assets/images/leoni.png";
import bosch from "../../assets/images/bosch.png";
import fiat from "../../assets/images/fiat.png";
import actavis from "../../assets/images/actavis.png";
import henkel from "../../assets/images/henkel.png";
import heimeier from "../../assets/images/heimeier.png";
import michelin from "../../assets/images/michelin.png";
import coopertires from "../../assets/images/coopertires.png";

function Clients() {
  return (
    <section className={styles.clientsSection} id="clients">
      <h2>Our Clients</h2>
      <div className={styles.carousel}>
        <div className={styles.carousel__group}>
          <div className={styles.carousel__card}>
            <a href="https://www.goodyear.com/">
              <img src={goodyear} alt="GoodYear" className={styles.goodyear} />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://climatecontrol.imiplc.com/">
              <img src={heimeier} alt="Heimeier" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <img src={bosch} alt="Bosch" />
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.leoni.com/">
              <img src={leoni} alt="Leoni" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.fiat.com/">
              <img src={fiat} alt="Fiat" className={styles.fiat} />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.actavis.rs/">
              <img src={actavis} alt="Actavis" className={styles.actavis} />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.henkel.com/">
              <img src={henkel} alt="Henkel" className={styles.henkel} />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.michelinman.com/">
              <img src={michelin} alt="Michelin" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.coopertire.co.uk/">
              <img src={coopertires} alt="Coopertires" />
            </a>
          </div>
        </div>
        <div aria-hidden className={styles.carousel__group}>
          <div className={styles.carousel__card}>
            <a href="https://www.goodyear.com/">
              <img src={goodyear} alt="GoodYear" className={styles.goodyear} />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://climatecontrol.imiplc.com/">
              <img src={heimeier} alt="Heimeier" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <img src={bosch} alt="Bosch" />
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.leoni.com/">
              <img src={leoni} alt="Leoni" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.fiat.com/">
              <img src={fiat} alt="Fiat" className={styles.fiat} />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.actavis.rs/">
              <img src={actavis} alt="Actavis" className={styles.actavis} />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.henkel.com/">
              <img src={henkel} alt="Henkel" className={styles.henkel} />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.michelinman.com/">
              <img src={michelin} alt="Michelin" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.coopertire.co.uk/">
              <img src={coopertires} alt="Coopertires" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
