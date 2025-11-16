import React, { use } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = ({ reviewPromise }) => {
  const data = use(reviewPromise);
  console.log(data);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl text-secondary text-center">Reviews</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sint
          ad voluptatum mollitia distinctio tenetur modi dolor veniam blanditiis
          provident.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <ReviewCard data={data}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
