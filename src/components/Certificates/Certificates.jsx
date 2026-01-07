import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";

import styles from "./Certificates.module.css";

import c1 from "../../assets/images/certificates/cert1.jpg";
import c2 from "../../assets/images/certificates/cert2.jpg";
import c3 from "../../assets/images/certificates/cert3.jpg";
import c4 from "../../assets/images/certificates/cert4.jpg";
import c5 from "../../assets/images/certificates/cert5.jpg";

export default function Certificates() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={styles.swiperss}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src={c1} alt="ISO certificate DG-0335.2016.002" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={c2} alt="ISO Certificate 9001:2015" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={c3} alt="ISO Certificate 14001:2015" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={c4} alt="ISO Certificate 45001:2018" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={c5} alt="Excellent SME Certificate" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
