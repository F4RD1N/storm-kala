import React from "react";
import Image from "next/image";

//Styled Components
import { Container, ImageContainer } from "./hero.style";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

//state
import { useHomeState } from "../../../hooks";

const Hero = () => {
  const { banners } = useHomeState();

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {banners?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ImageContainer title={item.title}>
                <Image
                  alt="hero slide images"
                  src={item.image}
                  placeholder='blur'
                  blurDataURL={item.image}
                  layout='fill'
                  objectFit="cover"
                />
              </ImageContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Hero;
