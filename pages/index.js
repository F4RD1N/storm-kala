import React, { useEffect } from "react";

//Components
import {
  Hero,
  SpecialOffer,
  ListSlider,
  CatagoryList,
  SpecialCatagoryList,
  PopularBrandsList,
} from "../components";

//preset data
import { homePreset } from "../presets";

//redux
import { useDispatch } from "react-redux";
import { getHomeData } from "../redux/home/homeAction";

//state
import useHomeState from "../components/useHomeState";

const Home = ({ homeData }) => {
  //send data to productReducer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData(homeData));
  }, []);

  const { incredibleProducts, bestSellingProducts } = useHomeState();

  return (
    <div>
      <Hero />
      <ListSlider
        data={incredibleProducts}
        title="تخفیفات شگفت انگیز"
        subTitle="خریدی به صرفه با تخفیفات شگفت انگیز"
      />
      <ListSlider data={bestSellingProducts} title="محبوب ترین ها" />
      <CatagoryList />
      <ListSlider data={bestSellingProducts} title="محبوب ترین ها" />
      <SpecialCatagoryList />
      <ListSlider data={bestSellingProducts} title="محبوب ترین ها" />
      <PopularBrandsList />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch("https://api.digikala.com/v1/");
  const data = await response.json();

  return {
    props: { homeData: homePreset(data.data) },
  };
};
