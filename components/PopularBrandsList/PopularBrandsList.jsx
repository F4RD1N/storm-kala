import React from "react";

//Styled Components
import { Container, Title } from "./PopularBrandsList.style";

//Components
import BrandCard from "./BrandCard";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

//state
import { useHomeState } from "../../hooks";

const PopularBrandsList = () => {
  const { popularBrands } = useHomeState();
  return (
    <Container>
      <Title>محبوبترین برند ها</Title>
      <Swiper
        spaceBetween={3}
        slidesPerView={3.2}
        freeMode={true}
        modules={[FreeMode]}
      >
        {popularBrands && popularBrands.length && popularBrands.map((brand) => {
          return (
            <SwiperSlide key={brand.id} className="swiper-item">
              <BrandCard brand={brand}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default PopularBrandsList;
