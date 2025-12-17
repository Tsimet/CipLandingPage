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
    <section className={styles.clients}>
      <div>
        <h4 className={styles.clients__heading}>our clients</h4>
        <h5 className={styles.clients__description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo.
        </h5>
      </div>
      <div className={styles.clients__grid}>
        <div className={`${styles.client} ${styles.gy}`}>
          <img src={goodyear} alt="GoodYear" />
        </div>
        <div className={`${styles.client} ${styles.gy1}`}>
          <img src={leoni} alt="Leoni" />
        </div>
        <div className={`${styles.client} ${styles.gy2}`}>
          <img src={fiat} alt="Fiat" />
        </div>
        <div className={`${styles.client} ${styles.gy3}`}>
          <img src={actavis} alt="Actavis" />
        </div>
        <div className={`${styles.client} ${styles.gy4}`}>
          <img src={henkel} alt="Henkel" />
        </div>
        <div className={`${styles.client} ${styles.gy5}`}>
          <img src={bosch} alt="Bosch" />
        </div>
        <div className={`${styles.client} ${styles.gy6}`}>
          <img src={heimeier} alt="Heimeier" />
        </div>
        <div className={`${styles.client} ${styles.gy7}`}>
          <img src={coopertires} alt="Coopertires" />
        </div>
        <div className={`${styles.client} ${styles.gy8}`}>
          <img src={michelin} alt="Michelin" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
