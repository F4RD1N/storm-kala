import React from "react";
import Link from "next/link";


//Styled Components
import { Container, Empty, GoBackToTheShop, Icon } from "./emptyCart.style";

//Icons
import { BsCart } from "react-icons/bs";

const EmptyCart = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default EmptyCart;
