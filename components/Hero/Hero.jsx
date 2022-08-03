import React from "react";
import Image from "next/image";
//Images
import EarPods from "../../assets/earpods.jpeg";

//Styled Components
import { Container, ImageContainer } from "./Hero.style";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

//state
import { useHomeState } from "../../hooks";

const Hero = () => {
  const { banners } = useHomeState();

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
        {banners?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ImageContainer title={item.title}>
                <Image
                  src={item.image}
                  width={1280}
                  height={720}
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
