import React, { useEffect } from "react";
import { useRouter } from "next/router";

//Components
import { Results, LoadMore } from "../../components/Catergory";

//pusher
import { dataPusher } from "../../helpers/pusher";

//preset
import { categoryPreset } from "../../presets";

//redux
import { useDispatch } from "react-redux";
import {
  getCategoryData,
  pushCategory,
} from "../../redux/category/categoryAction";

//state
import { useCategoryState } from "../../hooks";

const CategoryId = ({ data }) => {
  //store data to redux in the first load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryData(data));

    return () =>
      dispatch(
        getCategoryData({
          categoryState: {
            loading: false,
            products: [],
            filters: [],
            error: null,
            pager: [],
          },
        })
      );
  }, []);

  const { query } = useRouter();

  return (
    <div>
      <Results state={useCategoryState} />
      <LoadMore
        pusher={dataPusher(
          `categories/${query.categoryId}/search/?`,
          pushCategory
        )}
      />
    </div>
  );
};

export default CategoryId;

export const getServerSideProps = async ({ query }) => {
  const { categoryId } = query;
  const response = await fetch(
    `https://api.digikala.com/v1/categories/${categoryId}/search/?page=1`
  );
  const data = await response.json();

  return { props: { data: categoryPreset(data.data) } };
};
