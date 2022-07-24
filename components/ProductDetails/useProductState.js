import { useSelector } from "react-redux";

const useProductState = () => {
  const { product } = useSelector((state) => state.productState);

  return {
    id: product.id,
    title: product.title,
    brand: product.brand,
    catagory: product.category,
    images: product.images,
    rating: product.rating,
    colors: product.colors,
    videos: product.videos,
    introduce: product.introduce,
    options: product.options,
    information: product.information,
    comments: product.comments,
  };
};

export default useProductState;
