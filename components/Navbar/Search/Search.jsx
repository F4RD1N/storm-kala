import React, { useEffect } from "react";
import Link from "next/link";
//redux
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../../redux/search/searchAction";

//state
import useSearchState from "./useSearchState";
//Styled Components
import { Container, Results } from "../Search/Search.style";

//Components
import SearchCard from "./SearchCard";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

const Search = ({ value }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      value && dispatch(fetchSearch(value));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [value]);

  const { products } = useSearchState();
  return (
    <Container>
      <Results>
        <Swiper
          spaceBetween={3}
          slidesPerView={1.5}
          freeMode={true}
          modules={[FreeMode]}
        >
          {products?.map((product) => {
            const { id } = product;
            return (
              <SwiperSlide key={id} className="swiper-item">
                <Link href={`/product/${id}`}>
                  <a>
                    <SearchCard data={product} />
                  </a>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Results>
    </Container>
  );
};

export default Search;
