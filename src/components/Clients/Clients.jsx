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
            <img src={bosch} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <a href="https://climatecontrol.imiplc.com/">
              <img src={heimeier} alt="Heimeier" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.goodyear.com/">
              <img src={goodyear} alt="GoodYear" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.leoni.com/">
              <img src={leoni} alt="Leoni" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.fiat.com/">
              <img src={fiat} alt="Fiat" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.actavis.rs/">
              <img src={actavis} alt="Actavis" />
            </a>
          </div>
          <div className={styles.carousel__card}>
            <a href="https://www.henkel.com/">
              <img src={henkel} alt="Henkel" />
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
            <img src={bosch} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <img src={heimeier} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <img src={goodyear} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <img src={leoni} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <img src={fiat} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <img src={actavis} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <img src={henkel} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <img src={michelin} alt="" />
          </div>
          <div className={styles.carousel__card}>
            <img src={coopertires} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
