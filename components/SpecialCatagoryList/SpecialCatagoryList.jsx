import React from "react";

//Components
import SpecialCard from "./SpecialCard/SpecialCard";

//Shared Components
import { Container } from "./SpecialCatagoryList.style";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

const SpecialList = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={0}
        slidesPerView={1.3}
        freeMode={true}
        modules={[FreeMode]}
      >
      {[0, 1, 2].map((item) => {
          return (
            <SwiperSlide className="swiper-item">
              <SpecialCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SpecialList;
