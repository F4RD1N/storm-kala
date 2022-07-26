import React, { useEffect, useState } from "react";
import Link from "next/link";
//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearSearch } from "../../../redux/search/searchAction";

//state
import useSearchState from "./useSearchState";
//Styled Components
import { Result } from "../Search/Search.style";

//Components
import SearchCard from "./SearchCard";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

const Results = ({ value, overlayHandler }) => {
  const dispatch = useDispatch();

  //clear search data when component renders
  useEffect(() => {
    dispatch(clearSearch());
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      value && dispatch(fetchSearch(value));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [value]);


  const { products } = useSearchState();
  return (
    <Result>
      <Swiper
        spaceBetween={3}
        slidesPerView={1.9}
        freeMode={true}
        modules={[FreeMode]}
      >
        {products?.map((product) => {
          const { id } = product;
          return (
            <SwiperSlide
              key={id}
              className="swiper-item"
              onClick={overlayHandler}
            >
              <Link href={`/product/${id}`}>
                <a>
                  <SearchCard data={product} />
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Result>
  );
};

export default Results;
