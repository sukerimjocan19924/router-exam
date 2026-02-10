import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Pagination, Navigation, Autoplay} from 'swiper/modules';


const Home = () => {
  return (
    <sectiion>
      <div className="inner">
        <h2>heml</h2>  
        <Swiper
          pagination={true}
          // autoplay={true}
          toop
          modules={[Pagination, Navigation, Autoplay]}
          navigation={true}
          className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      </div>
    </sectiion>
  )
}

export default Home