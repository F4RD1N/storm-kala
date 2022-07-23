import React from "react";

//Styled Components
import {
  ReviewContainer,
  ReviewTitlebar,
  ReviewTitle,
  ReviewTime,
  ReviewBody,
} from "./Reviews.style";

const ReviewCard = () => {
  return (
    <ReviewContainer>
      <ReviewTitlebar>
        <ReviewTitle>محمد امین</ReviewTitle>
        <ReviewTime>۱۴۰۱/۰۴/۲۹</ReviewTime>
      </ReviewTitlebar>
      <ReviewBody>
        لپ تاپ خوبیه از لحاظ ظاهری واقعا زیباست از لحاظ استفاده کردن هم به درد
        بازی نمیخوره برای کارای معمولی خوبه و اینکه ویندوز روش نصب نیست باید
        خودتون نصب کنید با فلش درایور هاشو نتونستم هنوز نصب کنم مثل موس و وایفا
      </ReviewBody>
    </ReviewContainer>
  );
};

export default ReviewCard;
