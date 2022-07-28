import { useState, useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import {
  addItem,
  increase,
  decrease,
  removeItem,
} from "../../../redux/cart/cartAction";

//state
import useProductState from "../useProductState";
import useCartState from "./useCartState";

const useCart = () => {
  const [isItemExist, setIsItemExist] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);
  const dispatch = useDispatch();
  const { cartItems } = useCartState();
  const { id, price, mainDetails, images } = useProductState();
  //create a preset of data to pushin into redux store
  const cartPreset = {
    id,
    title: mainDetails?.title,
    price,
    quantity: 1,
    images,
  };

  useEffect(() => {
    //check if already exists in the store and if exists, then dont push it again!
    const duplicateItem = cartItems.find((item) => item.id === id);
    if (duplicateItem) setIsItemExist(true);
    else setIsItemExist(false);

    //get item quantity
    setItemQuantity(cartItems.find((item) => item.id === id)?.quantity);
  }, [cartItems, id]);

  const addHandler = () => {
    if (!isItemExist) dispatch(addItem(cartPreset));
  };
  const increaseHandler = () => {
    dispatch(increase(cartPreset.id));
  };
  const decreaseHandler = () => {
    if (isItemExist && itemQuantity > 1) dispatch(decrease(cartPreset.id));
  };
  const removeHanlder = () => {
    if (isItemExist && itemQuantity === 1) dispatch(removeItem(cartPreset.id));
  };

  return {
    addHandler,
    increaseHandler,
    decreaseHandler,
    removeHanlder,
    isItemExist,
    itemQuantity,
  };
};

export default useCart;
