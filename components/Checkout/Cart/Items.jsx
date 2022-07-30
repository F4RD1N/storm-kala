import React from "react";
//Styled Components
import { ClearCart } from "./Cart.style";


//Components
import ItemCard from "./ItemCard/ItemCard";
import EmptyCart from "./EmptyCart/EmptyCart";

//hooks
import { useCart, useCartState } from "../../../hooks";

const Items = () => {
  const { clearHandler } = useCart({ id: '' });
  const { cartItems } = useCartState();

  //check if there is no data in Cart
  if (!cartItems.length) return <EmptyCart />;

  return (
    <>
      {cartItems?.map((item) => {
        return <ItemCard key={item.id} data={item} />;
      })}

      <ClearCart onClick={clearHandler}>خالی کردن سبد</ClearCart>
    </>
  );
};

export default Items;
