import styles from "./Footer.module.css";
import cipLogo from "../../assets/images/logo.png";
import excellent from "../../assets/images/excellent.png";
import tuvNord from "../../assets/images/tuvnord.png";

function Footer() {
  return (
    <footer>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__logo}>
          <img src={cipLogo} alt="Cip" />
        </div>
        <div className={styles.footer__content}>
          <div className={styles.footer__info}>
            <h3>Cip d.o.o</h3>
            <ul>
              <li>Dragoljuba Rakića</li>
              <li>18400</li>
              <li>Prokuplje</li>
              <hr></hr>
              <li>Tel: +381 (27) 322 362</li>
              <li>office@cipprokuplje.rs</li>
              <li>posao@cipprokuplje.rs</li>
              <hr></hr>
              <li>VAT Number: 100952163</li>
              <li> CRN: 06082157</li>
              <li>SIC: 2825</li>
            </ul>
          </div>
          <div className={styles.footer__person}>
            <ul>
              <li>General Manager</li>
              <li>Petar Čolović</li>
              <hr></hr>
              <li>petar.colovic@cipprokuplje.rs</li>
              <li>Tel: +381 (60) 6060 664</li>
            </ul>
          </div>
          <div className={styles.footer__social}>
            <span>Follow us:</span>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/%C4%8Dip-d-o-o/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className={styles.footer__socialLink}
                  >
                    <path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__certifications}>
            <ul>
              <li>
                <img src={excellent} alt="Excellent Certified" />
              </li>
              <li>
                <img src={tuvNord} alt="TuvNord Certified" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
