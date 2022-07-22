import React from "react";
import { Hero, SpecialOffer, ListSlider, CatagoryList, SpecialCatagoryList } from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      
      <ListSlider />
      <br />
      <br />
      <CatagoryList />
      <br />
      <br />

      <SpecialCatagoryList />
      <br />
      <br />
      <br />

    </div>
  );
};

export default Home;
