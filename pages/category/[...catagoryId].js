import React, { useState } from "react";
import { useRouter } from "next/router";
import { ListSlider } from "../../components";
var currentPage = 0;

const CatagoryId = ({ userData }) => {
  (userData.data.products[0].id);

  const router = useRouter();
  const handler = () => {
    router.push(`/category/mobile`, undefined, { scroll: false });
  };
  return (
    <div>
      <button onClick={handler}>Load More</button>
      <br />
      <marquee loop="100" width="100%" direction="top" height="50px">
        Hello Mother Fucker
      </marquee>
      <ListSlider data={userData.data.products} />
    </div>
  );
};

export default CatagoryId;

export const getServerSideProps = async ({ query }) => {
  currentPage = currentPage + 1;

  let userData = null;
  try {
    const res = await fetch(
      `https://api.digikala.com/v1/categories/mobile-phone/search/?page=${currentPage}`
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch");
    }
    userData = await res.json();
  } catch (err) {
    userData = { error: { message: err.message } };
  }
  // Pass data to the page via props
  return { props: { userData } };
};
