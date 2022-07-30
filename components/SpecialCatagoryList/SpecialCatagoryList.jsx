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
        slidesPerView={1.1}
        freeMode={false}
        modules={[FreeMode]}
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
