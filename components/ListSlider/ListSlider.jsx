import React, { useState } from "react";
import Link from "next/link";
import { v4 } from "uuid";
//Shared Components
import { ProductCard } from "../shared";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

//Styled Components
import { Container, Title, SecTitle } from "./ListSlider.style";

//Components
import LoadMore from "./LoadMore";

//redux
import { pushIncredible } from "../../redux/home/homeAction";

const ListSlider = ({ data, title, subTitle, pusher, pageHandler }) => {

  return (
    <Container>
      <Title>{title}</Title>
      <SecTitle>{subTitle}</SecTitle>
      <Swiper
        spaceBetween={3}
        slidesPerView={2.6}
        freeMode={true}
        modules={[FreeMode]}
      >
        {data &&
          data.length &&
          data.map((product, index) => {
            const { id } = product;
            return (
              <SwiperSlide key={id} className="swiper-item">
                <Link href={`/product/${id}`}>
                  <a>
                    <ProductCard data={product} />
                  </a>
                </Link>
              </SwiperSlide>
            );
          })}

        <SwiperSlide className="swiper-item">
          <LoadMore pusher={pusher}/>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default ListSlider;
