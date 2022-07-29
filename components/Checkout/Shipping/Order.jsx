import React from "react";
import Image from "next/image";
//Styled Components
import {
  OrderContainer,
  OrderTitle,
  OrderItemCard,
  OrderItemImageContainer,
  OrderItemQuantity,
  BackToCart
} from "./Shipping.style";

//state
import useCartState from "../../ProductDetails/AddToCart/useCartState";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

const Order = () => {
  const { cartItems } = useCartState();
  console.log(cartItems);
  return (
    <OrderContainer>
      <OrderTitle>سفارش شما</OrderTitle>

      <Swiper
        spaceBetween={3}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode]}
      >
        {cartItems?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <OrderItemCard>
                <OrderItemImageContainer>
                  <Image
                    src={item.images[0].url[0]}
                    objectFit="contain"
                    width={100}
                    height={100}
                  />
                </OrderItemImageContainer>
                <OrderItemQuantity>{item.quantity}</OrderItemQuantity>
              </OrderItemCard>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <BackToCart>بازگشت به سبد خرید</BackToCart>
    </OrderContainer>
  );
};

export default Order;
