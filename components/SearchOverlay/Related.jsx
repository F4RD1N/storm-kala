import React, { useState } from "react";

//state
import { useSearchState } from "../../hooks";

//Styled Components
import {
  RelatedWordsContainer,
  RelatedWordsTitle,
  RelatedWord,
} from "./SearchOverlay.style";

const Search = () => {
  const { relatedWords } = useSearchState();

  return (
    <RelatedWordsContainer isVisible={relatedWords?.length}>
      <RelatedWordsTitle>جستوی مشابه</RelatedWordsTitle>
      {relatedWords?.map((word, index) => {
        return <RelatedWord key={index}>{word}</RelatedWord>;
      })}
    </RelatedWordsContainer>
  );
};

export default Search;
