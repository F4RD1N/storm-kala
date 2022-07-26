import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//Styled Components
import {
  Container,
  SecondContainer,
  Right,
  Left,
} from "../../components/product/product.style";
//Components
import {
  ImageSlider,
  MainDetails,
  Options,
  Introduce,
  Information,
  Comments,
  AddToCart,
} from "../../components/product";
import { ListSlider } from "../../components/shared";

//data presets
import { productPreset } from "../../presets";

//redux
import { useDispatch } from "react-redux";
import { getProduct, fetchPushComments } from "../../redux/slices/productSlice";

//state
import { useProductState } from "../../hooks";

const ProductDetails = ({ productData }) => {
  const { recommended, seo } = useProductState();

  //send data to productReducer
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getProduct(productData));
    //cleanup product state after unmounting
    return () => dispatch(getProduct());
  }, [router.query]);

  return (
    <div>
      <Head>
        <title>{seo?.title}</title>
        <link rel="icon" href={seo?.image} />
      </Head>
      <Container>
        <Right>
          <ImageSlider />
        </Right>

        <Left>
          <MainDetails />
          <Options />

          <AddToCart />
        </Left>
      </Container>
      <Introduce />

      <SecondContainer>
        <Right>
          <Information />
        </Right>
        <Left>
          <Comments action={fetchPushComments} />
          {/* <AddReview /> */}
        </Left>
      </SecondContainer>
      <div id="similar"></div>
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
  try {
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
      revalidate: 21600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
