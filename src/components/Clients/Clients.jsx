import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

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

// function Clients() {
//   return (
//     <section className={styles.clientsSection} id="clients">
//       <h2>Our Clients</h2>
//       <div className={styles.carousel}>
//         <div className={styles.carousel__group}>
//           <div className={styles.carousel__card}>
//             <a href="https://www.goodyear.com/">
//               <img src={goodyear} alt="GoodYear" className={styles.goodyear} />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://climatecontrol.imiplc.com/">
//               <img src={heimeier} alt="Heimeier" />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <img src={bosch} alt="Bosch" />
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.leoni.com/">
//               <img src={leoni} alt="Leoni" />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.fiat.com/">
//               <img src={fiat} alt="Fiat" className={styles.fiat} />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.actavis.rs/">
//               <img src={actavis} alt="Actavis" className={styles.actavis} />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.henkel.com/">
//               <img src={henkel} alt="Henkel" className={styles.henkel} />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.michelinman.com/">
//               <img src={michelin} alt="Michelin" />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.coopertire.co.uk/">
//               <img src={coopertires} alt="Coopertires" />
//             </a>
//           </div>
//         </div>
//         <div aria-hidden className={styles.carousel__group}>
//           <div className={styles.carousel__card}>
//             <a href="https://www.goodyear.com/">
//               <img src={goodyear} alt="GoodYear" className={styles.goodyear} />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://climatecontrol.imiplc.com/">
//               <img src={heimeier} alt="Heimeier" />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <img src={bosch} alt="Bosch" />
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.leoni.com/">
//               <img src={leoni} alt="Leoni" />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.fiat.com/">
//               <img src={fiat} alt="Fiat" className={styles.fiat} />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.actavis.rs/">
//               <img src={actavis} alt="Actavis" className={styles.actavis} />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.henkel.com/">
//               <img src={henkel} alt="Henkel" className={styles.henkel} />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.michelinman.com/">
//               <img src={michelin} alt="Michelin" />
//             </a>
//           </div>
//           <div className={styles.carousel__card}>
//             <a href="https://www.coopertire.co.uk/">
//               <img src={coopertires} alt="Coopertires" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function Clients(){
//   return(

//   )
// }

// export default Clients;

const ClientLogos = () => {
  // 1. Added a 'url' field to your logo data
  const logos = [
    {
      id: 1,
      src: michelin,
      alt: "Michelin",
      url: "https://www.michelinman.com/",
    },
    {
      id: 2,
      src: coopertires,
      alt: "Coopertires",
      url: "https://www.coopertire.com/",
    },
    {
      id: 3,
      src: goodyear,
      alt: "Goodyear",
      url: "https://www.goodyear.com/",
    },
    {
      id: 4,
      src: bosch,
      alt: "Bosch",
      url: "https://www.bosch.com/",
    },
    {
      id: 5,
      src: henkel,
      alt: "Henkel",
      url: "https://www.henkel.com/",
    },
    {
      id: 6,
      src: heimeier,
      alt: "Heimeier",
      url: "https://climatecontrol.imiplc.com/about-us/our-brands/brands/imi-heimeier",
    },
    {
      id: 6,
      src: leoni,
      alt: "Leoni",
      url: "https://www.leoni.com/",
    },
    {
      id: 7,
      src: actavis,
      alt: "Actavis",
      url: "https://www.actavis.rs/",
    },
    {
      id: 8,
      src: fiat,
      alt: "Fiat",
      url: "https://www.fiat.com/",
    },
  ];

  return (
    <section className={styles.clientsSection} id="clients">
      <div className={styles.clientsSection__overlay}></div>

      <h2>Our Clients</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.clientsSection__swiper}
      >
        {logos.map((logo) => (
          <SwiperSlide
            key={logo.id}
            className={styles.clientsSection__swiperSlide}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* 2. The Anchor Tag Wrapper */}
              <a
                href={logo.url}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice for external links
                style={{
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: "160px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientLogos;
