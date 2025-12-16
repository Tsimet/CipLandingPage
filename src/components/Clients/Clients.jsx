import styles from "./Clients.module.css";
import goodyear from "../../assets/images/goodyear.png";

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
          <img src={goodyear} alt="GoodYear" />
        </div>
        <div className={`${styles.client} ${styles.gy2}`}>
          <img src={goodyear} alt="GoodYear" />
        </div>
        <div className={`${styles.client} ${styles.gy3}`}>
          <img src={goodyear} alt="GoodYear" />
        </div>
        <div className={`${styles.client} ${styles.gy4}`}>
          <img src={goodyear} alt="GoodYear" />
        </div>
        <div className={`${styles.client} ${styles.gy5}`}>
          <img src={goodyear} alt="GoodYear" />
        </div>
        <div className={`${styles.client} ${styles.gy6}`}>
          <img src={goodyear} alt="GoodYear" />
        </div>
        <div className={`${styles.client} ${styles.gy7}`}>
          <img src={goodyear} alt="GoodYear" />
        </div>
        <div className={`${styles.client} ${styles.gy8}`}>
          <img src={goodyear} alt="GoodYear" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
