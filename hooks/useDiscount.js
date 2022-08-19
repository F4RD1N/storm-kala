import { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { setDiscount } from "../redux/Slices/cartSlice";

//discount config
import { DISCOUNT } from "../config/config";

const useDiscount = () => {
  const [discountCode, setDiscountCode] = useState("");
  const inputHandler = (event) => setDiscountCode(event.target.value);

  const dispatch = useDispatch();
  const discountHandler = () => {
    if (discountCode === DISCOUNT.CODE) {
      dispatch(setDiscount(DISCOUNT.VALUE));
      setDiscountCode("");
    }
  };
  const clearDiscountHandler = () => {
    dispatch(setDiscount(0));
  };

  return {
    discountHandler,
    discountCode,
    inputHandler,
    clearDiscountHandler,
  };
};

export default useDiscount;
