import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

//Styled Components
import { Container, Item } from "./ImageSlider.style";

//Images
import Details from "../../../assets/details.jpg";

const ImageSlider = () => {
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
        {[0, 1, 2, 3, 4, 5].map((item) => {
          return (
            <SwiperSlide key={item}>
              <Item>
                <Image src={Details} objectFit="cover" height={700} />
              </Item>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default ImageSlider;
