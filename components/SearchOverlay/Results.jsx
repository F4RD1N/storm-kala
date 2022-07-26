import React, { useEffect } from "react";
import Link from "next/link";

//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearSearch } from "../../redux/search/searchAction";

//state
import useSearchState from "./useSearchState";

//Styled Components
import { ResultsContainer } from "./SearchOverlay.style";

//Components
import ResultCard from "./ResultCard";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

const Results = ({ value }) => {
  const dispatch = useDispatch();

  //clear search data when component renders
  useEffect(() => {}, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      value && dispatch(fetchSearch(value));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [value]);

  const { products } = useSearchState();
  return (
    <ResultsContainer>
      <Swiper
        spaceBetween={3}
        slidesPerView={1.9}
        freeMode={true}
        modules={[FreeMode]}
      >
        {products?.map((product) => {
          const { id } = product;
          return (
            <SwiperSlide key={id} className="swiper-item">
              <Link href={`/product/${id}`}>
                <a>
                  <ResultCard data={product} />
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ResultsContainer>
  );
};

export default Results;
