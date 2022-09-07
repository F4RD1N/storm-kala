import React from "react";
import Link from "next/link";
import propTypes from 'prop-types'

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
//required modules
import { FreeMode, Navigation } from "swiper";

//Styled Components
import { Container, Title, SecTitle, Content } from "./listSlider.style";

//Components
import LoadMore from "./LoadMore";
import { ProductCard, SliderNavigation } from "..";

//redux
import { fetchPushData } from "../../../redux/slices/homeSlice";

const ListSlider = ({ data, title, subTitle, pusherLess }) => {
  //Slider Nvigation Control
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const arg = {
    loading: data.loading,
    url: data.url,
    type: data.type,
    pager: data?.pager,
    action: fetchPushData,
  };
  return (
    <Container>
      <Title>{title}</Title>
      <SecTitle>{subTitle}</SecTitle>
      <Content>
      <SliderNavigation refs={{next: navigationNextRef, prev: navigationPrevRef}}/>
        <Swiper
          navigation={{
            // Both prevEl & nextEl are null at render so this does not work
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          spaceBetween={3}
          slidesPerView={1.8}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            280: {
              slidesPerView: 1.9,
            },
            320: {
              slidesPerView: 2.1,
            },
            380: {
              slidesPerView: 2.6,
            },
            440: {
              slidesPerView: 2.7,
            },
            550: {
              slidesPerView: 3.1,
            },
            640: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 4.2,
            },
            1024: {
              slidesPerView: 5.2,
            },
            1280: {
              slidesPerView: 6.5,
            },
            1660: {
              slidesPerView: 7.2,
            },
          }}
        >
          {data?.products?.length &&
            data?.products?.map((product) => {
              const { id, status } = product;
              if (status !== "marketable") return;

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
          {!pusherLess && (
            <SwiperSlide className="swiper-item">
              <LoadMore arg={arg} />
            </SwiperSlide>
          )}
        </Swiper>
      </Content>
    </Container>
  );
};

//props types
ListSlider.propTypes = {
  data: propTypes.object.isRequired,
  title: propTypes.string.isRequired,
  subTitle: propTypes.string,
  pusherLess: propTypes.bool
};

export default ListSlider;
