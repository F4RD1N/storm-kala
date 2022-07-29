import React from "react";

//state
import useCartState from "../ProductDetails/AddToCart/useCartState";

//Components
import ItemCard from "./ItemCard/ItemCard";

const Items = () => {
  const { cartItems } = useCartState();
  return (
    <div>
      {cartItems?.map((item) => {
        return <ItemCard key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Items;
