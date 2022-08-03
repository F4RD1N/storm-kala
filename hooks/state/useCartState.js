import { useSelector } from "react-redux";

const useCartState = () => {
  const { cartItems, itemsCounter, total, discount, checkout } = useSelector(
    (state) => state.cartState
  );

  return {
    cartItems,
    itemsCounter,
    total,
    discount,
    checkout,
  };
};

export default useCartState;
