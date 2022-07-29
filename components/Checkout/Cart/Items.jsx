import React from "react";
//Styled Components
import { ClearCart } from "./Cart.style";

//state
import useCartState from "../../ProductDetails/AddToCart/useCartState";

//Components
import ItemCard from "./ItemCard/ItemCard";
import EmptyCard from "./EmptyCart/EmptyCard";
//logic
import useCart from "../../ProductDetails/AddToCart/useCart";
const Items = () => {
  const { clearHandler } = useCart({ id: 2 });
  const { cartItems } = useCartState();

  //check if there is no data in Cart
  if (!cartItems.length) return <EmptyCard />;

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
