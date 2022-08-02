import React, { useEffect } from "react";
import Head from "next/head";

//Components
import {
  Hero,
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
import { useHomeState } from "../hooks";

//pusher
import { dataPusher } from "../helpers/pusher";

const Home = ({ homeData }) => {
  const { incredible, bestSelling, mobileList, laptopList, popularBrands } =
    useHomeState();

  //send data to homeReducer
  const dispatch = useDispatch();
  useEffect(() => {
    if (!popularBrands.length) {
      dispatch(getHomeData(homeData));
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
        pusher={dataPusher("incredible-offers/products/?", pushIncredible)}
      />
      <ListSlider
        data={bestSelling}
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
    revalidate: 21600,
  };
};
