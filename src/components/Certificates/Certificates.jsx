import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";

import styles from "./Certificates.module.css";

import c1 from "../../assets/images/certificates/cert-9001-en.jpg";
import c2 from "../../assets/images/certificates/cert-14001-en.jpg";
import c3 from "../../assets/images/certificates/cert-45001-en.jpg";

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
      </Swiper>
    </>
  );
}
