import React, { useState, useEffect } from "react";

//Styled Components
import { Container } from "../components/Search/Search.style";

//Components

import { SearchInput, Results, Related } from "../components/Search";

//state
import { useSearchState } from "../hooks";

const Search = ({ query }) => {
  const { products } = useSearchState();
  //input handle
  const [value, setValue] = useState("");
  const valueHandler = (event) => setValue(event.target.value);

  useEffect(() => {
    setValue(query.q);
  }, []);

  return (
    <Container hasData={products?.length}>
      <SearchInput value={value} valueHandler={valueHandler} />
      <Results state={useSearchState} />
      <Related />
    </Container>
  );
};

export default Search;

export const getServerSideProps = ({ query }) => {
  return {
    props: { query: query },
  };
};

