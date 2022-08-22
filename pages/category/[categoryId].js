import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

//Styled Components
import { Title } from "../../components/Catergory/Category.style";

//Components
import { Results, LoadMore } from "../../components/Catergory";

//preset
import { categoryPreset } from "../../presets";

//redux
import { useDispatch } from "react-redux";
import { getData, fetchPushData } from "../../redux/slices/categorySlice";

//state
import { useCategoryState } from "../../hooks";

//constants
import { menu } from "../../constants";

const CategoryId = ({ data }) => {
  const { seo, title, pager, loading } = useCategoryState();
  const { query } = useRouter();
  //store data to redux in the first load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(data));
  }, [query]);

  const arg = {
    loading,
    url: `categories/${query.categoryId}/search/?`,
    pager,
    action: fetchPushData,
  };
  return (
    <div>
      <Head>
        <title>{seo?.title}</title>
      </Head>
      <Title>{title}</Title>
      <Results state={useCategoryState} />
      <LoadMore arg={arg} />
    </div>
  );
};

export default CategoryId;

//fetch Category Data
export const getStaticPaths = async () => {
  const presetPaths = [
    ...menu.category.map((item) =>
      item.sub.map((item) => "/category/" + item.code)
    ),
  ].flat();
  return {
    paths: presetPaths,
    fallback: `blocking`,
  };
};
export const getStaticProps = async (context) => {
  const { categoryId } = context.params;
  const response = await fetch(
    `https://api.digikala.com/v1/categories/${categoryId}/search/?page=1`
  );
  const data = await response.json();

  //cache dada when fetch in ssr(doesnt effect in isr or ssg)
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  return { props: { data: categoryPreset(data.data) }, revalidate: 21600 };
};
