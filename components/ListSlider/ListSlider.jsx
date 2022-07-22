import React from "react";

//Shared Components
import { ProductCard } from "../shared";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

//Styled Components
import {
  Container,
  Titlebar,
  Title,
  SecTitle,
  HorizontalRule,
} from "./ListSlider.style";

const ListSlider = () => {
  const mainTitle = "تخفیفات ما";
  const secTitle = "خریدی به صرفه با تخفیفات شگفت انگیز";
  return (
    <Container>
      <Titlebar>
        <Title>{mainTitle}</Title>
        <HorizontalRule />
      </Titlebar>
      <SecTitle>{secTitle}</SecTitle>
      <Swiper
        spaceBetween={0}
        slidesPerView={2.2}
        freeMode={true}
        modules={[FreeMode]}
      >
        <SwiperSlide className="swiper-item">
          <ProductCard/>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <ProductCard/>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <ProductCard/>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <ProductCard/>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <ProductCard/>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <ProductCard/>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default ListSlider;
