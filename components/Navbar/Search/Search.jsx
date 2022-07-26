import React, { useState } from "react";

//state
import useSearchState from "./useSearchState";
//Styled Components
import {
  Container,
  RelatedWordsContainer,
  RelatedWordsTitle,
  RelatedWord,
} from "../Search/Search.style";


//Components
import SearchInput from "../Input";
import Results from "./Results";

const Search = ({overlayHandler}) => {
  const [searchValue, setSearchValue] = useState("");
 

  const { relatedWords } = useSearchState();

  const inputHandler = (event) => setSearchValue(event.target.value);
  return (
    <Container >

      <SearchInput value={searchValue} handler={inputHandler} overlayHandler={overlayHandler} />
      <Results value={searchValue} overlayHandler={overlayHandler}/>
      
      <RelatedWordsContainer isVisible={relatedWords?.length}>
        <RelatedWordsTitle>جستوی مشابه</RelatedWordsTitle>
        {relatedWords?.map((word, index) => {
          return <RelatedWord key={index}>{word}</RelatedWord>;
        })}
      </RelatedWordsContainer>
    </Container>
  );
};

export default Search;
