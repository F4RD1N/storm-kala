import React, { useState, useEffect } from "react";

//Styled Components
import { Container } from "../components/search/search.style";

//Components

import { SearchInput, Results } from "../components/search";

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
    </Container>
  );
};

export default Search;

export const getServerSideProps = ({ query }) => {
  return {
    props: { query: query },
  };
};
