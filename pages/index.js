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
      <br />
      <CatagoryList />
      <br />
      <SpecialCatagoryList />
      <br />
    </div>
  );
};

export default Home;
