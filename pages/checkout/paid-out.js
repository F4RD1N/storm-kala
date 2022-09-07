import React, { useEffect } from "react";
import { useRouter } from "next/router";

//Styled Components
import { Container } from "../../components/checkout/PaidOut/PaidOut.style";

//state and logic
import { useCartState, useCart } from "../../hooks";
const PaidOut = () => {
  const { clearHandler } = useCart({ id: "" });
  const { checkout } = useCartState();
  const router = useRouter();

  //check if checked out
  useEffect(() => {
    if (checkout) {
      setTimeout(() => {
        router.replace("/");
        clearHandler();
      }, 1000);
    } else router.replace("/");
    return () => {
      if (checkout) clearHandler();
    };
  }, []);

  if (!checkout) return;
  return <Container>پرداخت با موفقیت انجام شد!</Container>;
};

export default PaidOut;
