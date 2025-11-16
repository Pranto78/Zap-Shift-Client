import React from 'react';

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import {Autoplay} from 'swiper/modules'

import amazon from '../../assets/brands/amazon.png';
import amazon2 from '../../assets/brands/amazon_vector.png';
import three from '../../assets/brands/casio.png';
import four from '../../assets/brands/moonstar.png';
import five from '../../assets/brands/randstad.png';
import six from '../../assets/brands/star.png';
import seven from '../../assets/brands/start_people.png';


const Brand = () => {
    return (
      <div className='py-7'>
        <h2 className='text-xl text-center my-14 font-bold text-secondary'>We've helped thousands of sales teams</h2>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={amazon} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={amazon2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={three} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={four} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={five} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={six} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={seven} alt="" />
          </SwiperSlide>
          {/* <SwiperSlide><img src={} alt="" /></SwiperSlide>
          <SwiperSlide><img src={} alt="" /></SwiperSlide> */}
        </Swiper>
      </div>
    );
};

export default Brand;