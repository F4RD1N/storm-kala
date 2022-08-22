import React, { useEffect } from "react";
import Head from "next/head";

//Components
import {
  Hero,
  ListSlider,
  CatagoryList,
  SpecialCatagoryList,
} from "../components";

//preset data
import { homePreset } from "../presets";

//redux
import { useDispatch } from "react-redux";

import { getData } from "../redux/slices/homeSlice";

//state
import { useHomeState } from "../hooks";

const Home = ({ homeData }) => {
  const { incredible, bestSelling, mobile, laptop, popularBrands } =
    useHomeState();

  //send data to homeReducer
  const dispatch = useDispatch();
  useEffect(() => {
    if (!popularBrands.length) {
      dispatch(getData(homeData));
    }
  }, []);

  return (
    <div>
      <Head>
        <title>صفحه اصلی | استورم کالا</title>
      </Head>
      <Hero />
      <ListSlider
        data={incredible}
        title="تخفیفات شگفت انگیز"
        subTitle="خریدی به صرفه با تخفیفات شگفت انگیز"
      />
      <ListSlider data={mobile} title="موبایل" />
      <CatagoryList />
      <SpecialCatagoryList />
      <ListSlider data={bestSelling} title="محبوب ترین ها" />
      <ListSlider
        data={laptop}
        title="لپتاپ"
        subTitle="لپتاپ و تجهیزات جانبی"
      />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch("https://api.digikala.com/v1/");
  const data = await response.json();

  let mobile = [];
  let laptop = [];
  const fetchMobile = async () => {
    const response = await fetch(
      "https://api.digikala.com/v1/categories/mobile-phone/search/?page=1"
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
  await fetchMobile().then((item) => (mobile = item));
  await fetchLoptop().then((item) => (laptop = item));
  return {
    props: { homeData: homePreset(data.data, mobile, laptop) },
    revalidate: 21600,
  };
};
