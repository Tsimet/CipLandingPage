import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";

// import Navigation from "./Navigation/Navigation";

import styles from "./Pictures.module.css";

import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";
import p5 from "../../assets/images/p5.jpg";
import p6 from "../../assets/images/p6.jpg";
import p7 from "../../assets/images/p7.jpg";
import p8 from "../../assets/images/p8.jpg";
import p9 from "../../assets/images/p9.jpg";
import p10 from "../../assets/images/p10.jpg";
import p11 from "../../assets/images/p11.jpg";
import p12 from "../../assets/images/p12.jpg";
import p13 from "../../assets/images/p13.jpg";
import p14 from "../../assets/images/p14.jpg";
import p15 from "../../assets/images/p15.jpg";
import p16 from "../../assets/images/p16.jpg";
import p17 from "../../assets/images/p17.jpg";
import p18 from "../../assets/images/p18.jpg";
import p19 from "../../assets/images/p19.jpg";
import p20 from "../../assets/images/p20.jpg";

export default function Pictures() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={styles.swiperss}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src={p1} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p2} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p3} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p4} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p5} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p6} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p7} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p8} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p9} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p10} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p11} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p12} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p13} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p14} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p15} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p16} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p17} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p18} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p19} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <img src={p20} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
