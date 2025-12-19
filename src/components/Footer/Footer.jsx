import styles from "./Footer.module.css";
import cipLogo from "../../assets/images/logo.png";

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
                <a href="">
                  <img src="insta" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="fb" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="linkedin" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* <iframe
            src={map}
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
