import React from "react";

//Components
import {
  ImageSlider,
  MainDetails,
  Options,
  Introduce,
  Information,
  Reviews,
  AddReview,
  AddToCart
} from "../../components/ProductDetails";

import {ListSlider, CatagoryList} from '../../components'
const ddd = () => {
  return (
    <div>
      <ImageSlider />
      <MainDetails />
      <Options />
      <Introduce />
      <Information />
      <AddToCart />
      <Reviews />
      <AddReview />
      <ListSlider />
      <CatagoryList />
      <ListSlider discount={true}/>
    </div>
  );
};

export default ddd;
