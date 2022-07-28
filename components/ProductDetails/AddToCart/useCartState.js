import { useSelector } from "react-redux";

const useCartState = () => {
  const { cartItems, itemsCounter, total } = useSelector((state) => state.cartState);

  return {
    cartItems,
    itemsCounter,
    total,
  };
};

export default useCartState;
