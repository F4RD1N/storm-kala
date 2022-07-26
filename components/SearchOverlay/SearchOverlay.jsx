import React, { useState, useEffect } from "react";

//Styled Components
import { Container } from "./SearchOverlay.style";

//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearSearch } from "../../redux/search/searchAction";

//Components
import SearchInput from "./SearchInput";
import Results from "./Results";
import Related from "./Related";

const SearchOverlay = ({ overlayHandler }) => {
  //input handle
  const [value, setValue] = useState("");
  const valueHandler = (event) => setValue(event.target.value);

  //clear search data after unmounting
  const dispatch = useDispatch()
  useEffect(() => {
    return () => dispatch(clearSearch());
  }, []);
  return (
    <Container>
      <SearchInput
        overlayHandler={overlayHandler}
        value={value}
        valueHandler={valueHandler}
      />
      <Results value={value}/>
      <Related />
    </Container>
  );
};

export default SearchOverlay;
