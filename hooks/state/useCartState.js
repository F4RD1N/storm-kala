import { useSelector } from "react-redux";

const useCartState = () => {
  const { cartItems, itemsCounter, total, discount } = useSelector((state) => state.cartState);

  return {
    cartItems,
    itemsCounter,
    total,
    discount
  };
};

export default useCartState;
