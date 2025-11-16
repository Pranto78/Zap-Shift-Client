import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ← important!

import bannerimg1 from "../../assets/banner/banner1.png";
import bannerimg2 from "../../assets/banner/banner2.png";
import bannerimg3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000} // 3 seconds
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      <div>
        <img src={bannerimg1} alt="Banner 1" />
      </div>
      <div>
        <img src={bannerimg2} alt="Banner 2" />
      </div>
      <div>
        <img src={bannerimg3} alt="Banner 3" />
      </div>
    </Carousel>
  );
};

export default Banner;
