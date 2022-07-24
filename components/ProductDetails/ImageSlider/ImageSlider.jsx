import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

//Styled Components
import { Container} from "./ImageSlider.style";

//Components
import SliderItem from "./SliderItem";

//state
import productState from "../productState";

const ImageSlider = () => {
  const { images } = productState();
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {images &&
          images.map((item) => {
            return (
              <SwiperSlide key={item.url[0]}>
                <SliderItem source={item.url[0]} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default ImageSlider;
