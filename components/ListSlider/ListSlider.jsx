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
        slidesPerView={2.6}
        freeMode={true}
        modules={[FreeMode]}
      >
        {data.products &&
          data.products.length &&
          data.products.map((product) => {
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
