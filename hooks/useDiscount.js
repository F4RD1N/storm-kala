import { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { setDiscount } from "../redux/cart/cartAction";

const useDiscount = () => {
  const [discountCode, setDiscountCode] = useState("");
  const inputHandler = (event) => setDiscountCode(event.target.value);

  const discountValue = 0.1;
  const dispatch = useDispatch();
  const discountHandler = () => {
    if (discountCode === "F4RD1N") {
      dispatch(setDiscount(discountValue));
      setDiscountCode("");
    }
  };
  const clearDiscountHandler = () => {
    dispatch(setDiscount(0));
  }

  return {
    discountHandler,
    discountCode,
    inputHandler,
    clearDiscountHandler
  };
};

export default useDiscount;
