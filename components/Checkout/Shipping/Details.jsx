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
} from "./Shipping.style";

//state
import useCartState from "../../ProductDetails/AddToCart/useCartState";

import { englishToPersian, convertPrice } from "../../../helpers";

const Details = () => {
  const { itemsCounter, total } = useCartState();
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

      <DetailsItemContainer>
        <DetailsItemTitle>قابل پرداخت</DetailsItemTitle>
        <DetailsItemPrice>{convertPrice(total)} تومان</DetailsItemPrice>
      </DetailsItemContainer>
    </DetailsContainer>
  );
};

export default Details;
