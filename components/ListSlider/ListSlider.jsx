import React from "react";
import Link from "next/link";

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

const ListSlider = ({ data, title, subTitle, pusher, pusherLess }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SecTitle>{subTitle}</SecTitle>
      <Swiper
        spaceBetween={3}
        slidesPerView={1.4}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          280: {
            slidesPerView: 1.8,
          },
          320: {
            slidesPerView: 2.25,
          },
          440: {
            slidesPerView: 2.6,
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
            <LoadMore pusher={pusher} pager={data?.pager} />
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
};

export default ListSlider;
