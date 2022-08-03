import React from "react";

//Components
import SpecialCard from "./SpecialCard";

//Shared Components
import { Container } from "./SpecialCatagoryList.style";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

//state
import { useHomeState } from "../../hooks";

const SpecialList = () => {
  const { recommendationSubCategories } = useHomeState();
  return (
    <Container>
      <Swiper
        spaceBetween={3}
        slidesPerView={.5}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          280: {
            slidesPerView: .8,
          },
          320: {
            slidesPerView: .9,
          },
          440: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1.6,
          },
          768: {
            slidesPerView: 1.75,
          },
          1024: {
            slidesPerView: 2.1,
          },
          1280: {
            slidesPerView: 2.6,
          },
          1660: {
            slidesPerView: 3.4,
          },
        }}
      >
        {recommendationSubCategories?.map((category) => {
          return (
            <SwiperSlide key={category.id} className="swiper-item">
              <SpecialCard category={category} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SpecialList;
