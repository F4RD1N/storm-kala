import React from "react";

//Styled Components
import { Container, Titlebar, Title, ReviewsCount } from "./Reviews.style";

//Components
import ReviewCard from "./ReviewCard";
const Reviews = () => {
  return (
    <Container>
      <Titlebar>
        <Title>دیدگاه ها</Title>
        <ReviewsCount>۱۶۷ دیدگاه</ReviewsCount>
      </Titlebar>

      {
        [0,1,2].map(item => {
          return(
            <ReviewCard key={item}/>
          )
        })
      }
    </Container>
  );
};

export default Reviews;
