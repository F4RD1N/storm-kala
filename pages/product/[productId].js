import React, { useEffect } from "react";
import { useRouter } from "next/router";

//Components
import {
  ImageSlider,
  MainDetails,
  Options,
  Introduce,
  Information,
  Comments,
  AddReview,
  AddToCart,
} from "../../components/ProductDetails";
import { ListSlider } from "../../components";

//data presets
import { productPreset } from "../../presets";

//redux
import { useDispatch } from "react-redux";
import { getProduct, pushComments } from "../../redux/product/productAction";

//state
import { useProductState } from "../../hooks";

//pusher
import { dataPusher } from "../../helpers/pusher";

const ProductDetails = ({ productData }) => {
  const { id, recommended } = useProductState();
  //send data to productReducer
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(getProduct(productData));
  }, [router.query]);

  return (
    <div>
      <ImageSlider />
      <MainDetails />
      <Options />
      <Introduce />
      <Information />
      <AddToCart />
      <Comments pusher={dataPusher(`product/${id}/comments/?`, pushComments, 'comments')}/>
      <AddReview />
      <ListSlider data={recommended} title="کالا های مشابه" pusherLess={true} />
    </div>
  );
};

export default ProductDetails;

//fetch Product Data
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: `blocking`,
  };
};

export const getStaticProps = async (context) => {
  const { productId } = context.params;
  const response = await fetch(
    `https://api.digikala.com/v1/product/${productId}/`
  );
  const data = await response.json();

  if (!data.data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { productData: productPreset(data.data) },
    revalidate: 100000,
  };
};
