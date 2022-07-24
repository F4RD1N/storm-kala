import React from "react";
import Link from "next/link";

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
  LoadMoreButton,
} from "./ListSlider.style";

//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const ListSlider = ({ data, title, subTitle }) => {
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
          data.map((product) => {
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
          <LoadMoreContainer>
            <LoadMoreButton pressed={false}>
              <AiOutlineArrowLeft />
            </LoadMoreButton>
          </LoadMoreContainer>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default ListSlider;
