import React from "react";
import {
  Hero,
  SpecialOffer,
  ListSlider,
  CatagoryList,
  SpecialCatagoryList,
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

    </div>
  );
};

export default Home;
