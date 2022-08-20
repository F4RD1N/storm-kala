import { useSelector } from "react-redux";

const useProductState = () => {
  const { product, recommendations, seo } = useSelector((state) => state.productState);

  return {
    id: product?.id,
    mainDetails: product?.mainDetails,
    status: product?.status,
    suggestion: product?.suggestion,
    brand: product?.brand,
    category: product?.category,
    images: product?.images,
    rating: product?.rating,
    price: product?.price,
    videos: product?.videos,
    introduce: product?.introduce,
    options: product?.options,
    information: product?.information,
    comments: {
      ...product?.comments,
      comments: product?.comments?.comments?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)
    },
    recommended: {
      products: recommendations
    },
    seo
  };
};

export default useProductState;
