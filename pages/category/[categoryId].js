import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

//Styled Components
import { Title } from "../../components/Catergory/Category.style";

//Components
import { Results, LoadMore } from "../../components/Catergory";

//pusher
import { dataPusher } from "../../helpers/pusher";

//preset
import { categoryPreset } from "../../presets";

//redux
import { useDispatch } from "react-redux";
import {
  getData,
  pushData,
} from "../../redux/slices/categorySlice";

//state
import { useCategoryState } from "../../hooks";

const CategoryId = ({ data }) => {
  const { seo, title } = useCategoryState();
  const { query } = useRouter();
  //store data to redux in the first load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(data));
  }, [query]);

  return (
    <div>
      <Head>
        <title>{seo?.title}</title>
      </Head>
      <Title>{title}</Title>
      <Results state={useCategoryState} />
      <LoadMore
        pusher={dataPusher(
          `categories/${query.categoryId}/search/?`,
          pushData
        )}
      />
    </div>
  );
};

export default CategoryId;

export const getServerSideProps = async ({ res, query }) => {
  const { categoryId } = query;
  const response = await fetch(
    `https://api.digikala.com/v1/categories/${categoryId}/search/?page=1`
  );
  const data = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return { props: { data: categoryPreset(data.data) } };
};
