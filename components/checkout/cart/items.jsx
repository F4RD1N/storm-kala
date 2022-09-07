import React from "react";
//Styled Components
import { ClearCart, Content } from "./cart.style";

//Components
import ItemCard from "./itemCard/itemCard";
import EmptyCart from "./emptyCart/emptyCart";

//hooks
import { useCart, useCartState } from "../../../hooks";

const Items = () => {
  const { clearHandler } = useCart({ id: "" });
  const { cartItems } = useCartState();

  //check if there is no data in Cart
  if (!cartItems.length) return <EmptyCart />;

  return (
    <>
      <Content>
        {cartItems?.map((item) => {
          return <ItemCard key={item.id} data={item} />;
        })}
      </Content>

      <ClearCart onClick={clearHandler}>خالی کردن سبد</ClearCart>
    </>
  );
};

export default Items;
