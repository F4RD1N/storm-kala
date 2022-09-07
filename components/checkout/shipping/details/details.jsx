import React from "react";

//Shared Components
import {
  DetailsContainer,
  DetailsTitlebar,
  DetailsTitle,
  TotalPrice,
  DetailsItemContainer,
  DetailsItemTitle,
  DetailsItemPrice,
} from "./detials.style";

//state
import { useCartState } from "../../../../hooks";

import { englishToPersian, convertPrice } from "../../../../helpers";

const Details = () => {
  const { itemsCounter, total, discount } = useCartState();
  return (
    <DetailsContainer>
      <DetailsTitlebar>
        <DetailsTitle>
          قیمت کالاها ({englishToPersian(itemsCounter)})
        </DetailsTitle>
        <TotalPrice>{convertPrice(total)} تومان</TotalPrice>
      </DetailsTitlebar>

      <DetailsItemContainer>
        <DetailsItemTitle>هزینه ارسال</DetailsItemTitle>
        <DetailsItemPrice>رایگان</DetailsItemPrice>
      </DetailsItemContainer>

      {discount > 0 && <DetailsItemContainer>
        <DetailsItemTitle>تخفیف ({englishToPersian(discount * 100)}%)</DetailsItemTitle>
        <DetailsItemPrice>{convertPrice(total * discount)} تومان</DetailsItemPrice>
      </DetailsItemContainer>}

      <DetailsItemContainer>
        <DetailsItemTitle>قابل پرداخت</DetailsItemTitle>
        <DetailsItemPrice>{convertPrice(total - (total * discount))} تومان</DetailsItemPrice>
      </DetailsItemContainer>
    </DetailsContainer>
  );
};

export default Details;
