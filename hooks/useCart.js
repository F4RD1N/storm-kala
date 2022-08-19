import { useState, useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import {
  addItem,
  increase,
  decrease,
  removeItem,
  clearCart,
  broadCastCart,
  setCheckout
} from "../redux/Slices/cartSlice";

//state
import {useCartState} from "./";

import { BroadcastChannel } from "broadcast-channel";

const useCart = (product) => {
  const [isItemExist, setIsItemExist] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [orderLimit, setOrderLimit] = useState(1);
  const dispatch = useDispatch();
  const { cartItems, itemsCounter, total, discount, checkout } = useCartState();
  const { id, price, mainDetails, images, status } = product;

  //create a preset of data to pushin into redux store
  const cartPreset = {
    id,
    title: mainDetails ? mainDetails.title : "",
    price,
    quantity: 1,
    images,
    status
  };

  //broadcast channel
  const [pressed, setPressed] = useState(0);
  
  // useEffect(() => {
  //   const cartChannel = new BroadcastChannel("cart");
  //   cartChannel.postMessage({ cartItems, itemsCounter, total, discount, checkout });
  //   cartChannel.onmessage = (msg) => {
  //     dispatch(broadCastCart(msg));
  //     console.log('first')
  //   };
  //   return async () => await cartChannel.close();
  // }, [pressed]);

  useEffect(() => {
    //check if already exists in the store and if exists, then dont push it again!
    const duplicateItem = cartItems.find((item) => item.id === id);
    if (duplicateItem) setIsItemExist(true);
    else setIsItemExist(false);

    //get item quantity
    setItemQuantity(cartItems.find((item) => item.id === id)?.quantity);

    //get item order limit
    setOrderLimit(price?.order_limit);
  }, [cartItems, id]);

  const addHandler = () => {
    if (!isItemExist) dispatch(addItem(cartPreset));
    setPressed((currentValue) => currentValue + 1);
  };
  const increaseHandler = async () => {
    dispatch(increase(cartPreset));
    setPressed((currentValue) => currentValue + 1);
  };
  const decreaseHandler = () => {
    if (isItemExist && itemQuantity > 1) dispatch(decrease(cartPreset));
    setPressed((currentValue) => currentValue + 1);
  };
  const removeHanlder = () => {
    if (isItemExist && itemQuantity === 1) dispatch(removeItem(cartPreset));
    setPressed((currentValue) => currentValue + 1);
  };

  const clearHandler = () => {
    dispatch(clearCart());
    setPressed((currentValue) => currentValue + 1);
  };

  const checkoutHanlder = () => {
    dispatch(setCheckout())
  }

  return {
    addHandler,
    increaseHandler,
    decreaseHandler,
    removeHanlder,
    clearHandler,
    checkoutHanlder,
    isItemExist,
    itemQuantity,
    orderLimit,
  };
};


export default useCart;

