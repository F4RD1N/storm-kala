import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

//Styled Components
import { Container} from "./imageSlider.style";

//Components
import SliderItem from "./sliderItem";

//state
import { useProductState } from "../../../hooks";

const ImageSlider = () => {
  const { images, mainDetails } = useProductState();
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
        {images?.map((item) => {
            return (
              <SwiperSlide key={item.url[0]}>
                <SliderItem source={item.url[0]} alt={mainDetails.title}/>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default ImageSlider;
