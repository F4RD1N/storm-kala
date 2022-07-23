import React from "react";

//Styled Components
import { Container, Title } from "./PopularBrandsList.style";

//Components
import BrandCard from "./BrandCard/BrandCard";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";
const PopularBrandsList = () => {
  return (
    <Container>
      <Title>محبوبترین برند ها</Title>
      <Swiper
        spaceBetween={3}
        slidesPerView={3.2}
        freeMode={true}
        modules={[FreeMode]}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <SwiperSlide key={item} className="swiper-item no-border">
              <BrandCard />
            </SwiperSlide>
          );
        })}

       
      </Swiper>
    </Container>
  );
};

export default PopularBrandsList;
