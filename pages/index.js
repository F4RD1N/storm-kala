import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

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
  pushBestSelling,
  pushLaptop,
  pushMobile,
} from "../redux/home/homeAction";

//state
import useHomeState from "../components/useHomeState";

//pusher
import { dataPusher } from "../helpers/pusher";

//list slider fatched page
var currentMobilePage = 1;

const Home = ({ homeData }) => {
  //send data to productReducer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData(homeData));
  }, []);

  const { incredibleProducts, bestSellingProducts, mobileList, laptopList } =
    useHomeState();

  const router = useRouter();
  const handler = (action, data) => {
    router.push(`/`, undefined, { scroll: false });
    dispatch(action(data))
  };

  return (
    <div>
      <Hero />
      <button onClick={() => handler(pushIncredible, homeData.newMobileData)}>Load More</button>
      <br />
      <ListSlider
        data={incredibleProducts}
        title="تخفیفات شگفت انگیز"
        subTitle="خریدی به صرفه با تخفیفات شگفت انگیز"
        pusher={dataPusher("incredible-offers/products/?", pushIncredible)}
        dataPusher={() => handler(pushIncredible, homeData.newMobileData)}
      />
      <ListSlider
        data={bestSellingProducts}
        title="محبوب ترین ها"
        pusher={dataPusher(
          "promotion-search/?promotion_types%5B0%5D=incredible_offer&promotion_types%5B1%5D=promotion&",
          pushBestSelling
        )}
      />
      <CatagoryList />
      <SpecialCatagoryList />
      <PopularBrandsList />
      <ListSlider
        data={mobileList}
        title="موبایل"
        pusher={dataPusher("categories/mobile/search/?", pushMobile)}
        dataPusher={() => handler(pushMobile, homeData.newMobileData)}
      />
      <ListSlider
        data={laptopList}
        title="لپتاپ"
        pusher={dataPusher("categories/laptop/search/?", pushLaptop)}
      />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch("https://api.digikala.com/v1/");
  const data = await response.json();

  let mobileList = [];
  let laptopList = [];
  let newMobileData = []
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

  const pushDataToMobile = async () => {
    currentMobilePage = currentMobilePage + 1;
    let userData = null;
    try {
      const res = await fetch(
        `https://api.digikala.com/v1/categories/mobile-phone/search/?page=${currentMobilePage}`
      );
      if (res.status !== 200) {
        throw new Error("Failed to fetch");
      }
      userData = await res.json();
    } catch (err) {
      userData = { error: { message: err.message } };
    }
    return userData;
  };
  await pushDataToMobile().then((item) => {
    newMobileData = item
    console.log(newMobileData.data.products[0].id)
  });
  return {
    props: { homeData: homePreset(data.data, mobileList, laptopList, newMobileData) },
  };
};
