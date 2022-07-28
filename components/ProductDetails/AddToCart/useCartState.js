import { useSelector } from "react-redux";

const useCartState = () => {
  const { cartItems } = useSelector((state) => state.cartState);

  return {
    cartItems
  };
};

export default useCartState;
