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
  Title,
  SecTitle,
  LoadMoreContainer,
  LoadMoreButton
} from "./ListSlider.style";

//Icons 
import { AiOutlineArrowLeft } from "react-icons/ai";

const ListSlider = () => {
  const mainTitle = "تخفیفات ما";
  const secTitle = "خریدی به صرفه با تخفیفات شگفت انگیز";
  return (
    <Container>
      <Title>{mainTitle}</Title>
      <SecTitle>{secTitle}</SecTitle>
      <Swiper
        spaceBetween={5}
        slidesPerView={2.6}
        freeMode={true}
        modules={[FreeMode]}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <SwiperSlide key={item} className="swiper-item no-border">
              <ProductCard hasDiscount={true}/>
            </SwiperSlide>
          );
        })}

        <SwiperSlide className="swiper-item no-border">
          <LoadMoreContainer>
            <LoadMoreButton>
                <AiOutlineArrowLeft />
            </LoadMoreButton>
            </LoadMoreContainer>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default ListSlider;
