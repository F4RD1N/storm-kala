import React from "react";
import {
  Hero,
  SpecialOffer,
  ListSlider,
  CatagoryList,
  SpecialCatagoryList,
  PopularBrandsList
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <ListSlider />
      <ListSlider discount={true} />
      <CatagoryList />
      <ListSlider />
      <SpecialCatagoryList />
      <ListSlider discount={true} />
      <PopularBrandsList />
    </div>
  );
};

export default Home;
