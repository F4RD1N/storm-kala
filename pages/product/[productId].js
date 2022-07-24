import React, { useEffect } from "react";

//Components
import {
  ImageSlider,
  MainDetails,
  Options,
  Introduce,
  Information,
  Reviews,
  AddReview,
  AddToCart,
} from "../../components/ProductDetails";
import { ListSlider, CatagoryList } from "../../components";

//data presets
import { productPreset } from "../../presets";

//redux
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/product/productAction";

const ProductDetails = ({ productData }) => {

  //send data to productReducer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productData));
  }, []);

  return (
    <div>
      <ImageSlider />
      <MainDetails />
      <Options />
      <Introduce />
      <Information />
      <AddToCart />
      <Reviews />
      <AddReview />
      <ListSlider />
      <CatagoryList />
      <ListSlider discount={true} />
    </div>
  );
};

export default ProductDetails;


//fetch Product Data
export const getServerSideProps = async (context) => {
  const { productId } = context.params;
  const res = await fetch(`https://api.digikala.com/v1/product/${productId}/`);
  const data = await res.json();

  if (!data.data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { productData: productPreset(data.data) },
  };
};
