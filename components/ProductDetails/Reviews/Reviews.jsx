import React from "react";

//Styled Components
import {
  Container,
  Titlebar,
  Title,
  ReviewsCount,
  ReviewContainer,
  ReviewTitlebar,
  ReviewTitle,
  ReviewTime,
  ReviewBody,
} from "./Reviews.style";
const Reviews = () => {
  return (
    <Container>
      <Titlebar>
        <Title>دیدگاه ها</Title>
        <ReviewsCount>۱۶۷ دیدگاه</ReviewsCount>
      </Titlebar>

      <ReviewContainer>
        <ReviewTitlebar>
          <ReviewTitle>محمد امین</ReviewTitle>
          <ReviewTime>۱۴۰۱/۰۴/۲۹</ReviewTime>
        </ReviewTitlebar>
        <ReviewBody>
          لپ تاپ خوبیه از لحاظ ظاهری واقعا زیباست از لحاظ استفاده کردن هم به درد
          بازی نمیخوره برای کارای معمولی خوبه و اینکه ویندوز روش نصب نیست باید
          خودتون نصب کنید با فلش درایور هاشو نتونستم هنوز نصب کنم مثل موس و
          وایفا
        </ReviewBody>
      </ReviewContainer>
      
    </Container>
  );
};

export default Reviews;
