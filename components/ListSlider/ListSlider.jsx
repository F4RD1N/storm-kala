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

const ListSlider = ({ discount, data, title }) => {
  const mainTitle = "تخفیفات ما";
  const secTitle = "خریدی به صرفه با تخفیفات شگفت انگیز";
  return (
    <Container>
      <Title>{title}</Title>
      <SecTitle>{discount && secTitle}</SecTitle>
      <Swiper
        spaceBetween={3}
        slidesPerView={2.6}
        freeMode={true}
        modules={[FreeMode]}
      >
        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <SwiperSlide key={item} className="swiper-item">
              <Link href="/product/8119459">
                <a>
                  <ProductCard hasDiscount={discount} />
                </a>
              </Link>
            </SwiperSlide>
          );
        })} */}

        {
          data && data.length && data.map(product => {
            const {id} = product
            return(
              <SwiperSlide key={id} className="swiper-item">
              <Link href={`/product/${id}`}>
                <a>
                  <ProductCard data={product} hasDiscount={discount} />
                </a>
              </Link>
            </SwiperSlide>
            )
          })
        }

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
