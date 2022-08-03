import React from "react";
import Link from "next/link";


//Styled Components
import { Empty, GoBackToTheShop, Icon } from "./EmptyCart.style";

//Icons
import { BsCart } from "react-icons/bs";

const EmptyCart = () => {
  return (
    <>
      <Empty>
        <Icon>
          <BsCart />
        </Icon>
        سبد شما خالی است!
      </Empty>
      <Link href="/">
        <a>
          <GoBackToTheShop>بازگشت به فروشگاه</GoBackToTheShop>
        </a>
      </Link>
    </>
  );
};

export default EmptyCart;
