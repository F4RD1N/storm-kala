import React, { useEffect, useState } from "react";

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
import {
  getHomeData,
  pushIncredible,
  pushLaptop,
  pushMobile,
} from "../redux/home/homeAction";

//state
import useHomeState from "../components/useHomeState";

const Home = ({ homeData }) => {
  //send data to productReducer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData(homeData));
  }, []);

  //push data to list
  const incrediblePusher = {
    endpoint: (page) =>
      `https://reverse-vercel.vercel.app/v1/incredible-offers/products/?page=${page}`,
    action: (payload) => pushIncredible(payload),
    dataPath: (path) => path.data?.data.products,
  };

  const mobilePusher = {
    endpoint: (page) =>
      `https://reverse-vercel.vercel.app/v1/categories/mobile/search/?page=${page}`,
    action: (payload) => pushMobile(payload),
    dataPath: (path) => path.data?.data.products,
  };

  const laptopPusher = {
    endpoint: (page) =>
      `https://reverse-vercel.vercel.app/v1/categories/laptop/search/?page=${page}`,
    action: (payload) => pushLaptop(payload),
    dataPath: (path) => path.data?.data.products,
  };

  const { incredibleProducts, bestSellingProducts, mobileList, laptopList } =
    useHomeState();

  return (
    <div>
      <Hero />
      <ListSlider
        data={incredibleProducts}
        title="تخفیفات شگفت انگیز"
        subTitle="خریدی به صرفه با تخفیفات شگفت انگیز"
        pusher={incrediblePusher}
      />
      <ListSlider data={bestSellingProducts} title="محبوب ترین ها" />
      <CatagoryList />
      <SpecialCatagoryList />
      <PopularBrandsList />
      <ListSlider data={mobileList} title="موبایل" pusher={mobilePusher} />
      <ListSlider data={laptopList} title="لپتاپ" pusher={laptopPusher} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch("https://api.digikala.com/v1/");
  const data = await response.json();

  let mobileList = [];
  let laptopList = [];
  const fetchMobile = async () => {
    const response = await fetch(
      "https://api.digikala.com/v1/categories/mobile/search/?page=1"
    );
    const data = await response.json();
    return data;
  };
  const fetchLoptop = async () => {
    const response = await fetch(
      "https://api.digikala.com/v1/categories/laptop/search/?page=1"
    );
    const data = await response.json();
    return data;
  };
  await fetchMobile().then((item) => (mobileList = item));
  await fetchLoptop().then((item) => (laptopList = item));
  return {
    props: { homeData: homePreset(data.data, mobileList, laptopList) },
  };
};
