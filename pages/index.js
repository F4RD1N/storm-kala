import React from "react";
import { Hero, SpecialOffer } from "../components";
import { ProductCard } from "../components/shared";
const Home = () => {
  return (
    <div>
      <Hero />
      {/* <SpecialOffer /> */}
      <ProductCard />
    </div>
  );
};

export default Home;
