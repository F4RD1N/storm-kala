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

  return {
    discountHandler,
    discountCode,
    inputHandler,
  };
};

export default useDiscount;
