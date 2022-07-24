import { useSelector } from "react-redux";

const useProductState = () => {
  const { product, recommendations } = useSelector((state) => state.productState);

  return {
    id: product.id,
    mainDetails: product.mainDetails,
    brand: product.brand,
    catagory: product.category,
    images: product.images,
    rating: product.rating,
    price: product.price,
    videos: product.videos,
    introduce: product.introduce,
    options: product.options,
    information: product.information,
    comments: product.comments,
    recommended: recommendations
  };
};

export default useProductState;
