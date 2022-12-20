import React from "react";
import { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import SwiperCard from "./SwiperCard";
const SwiperJS = ({ num }) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            slidesPerView={num}
            navigation
            loop
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperJS;
