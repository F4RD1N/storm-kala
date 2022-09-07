import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//Styled Components
import {
  OrderContainer,
  OrderTitle,
  OrderItemCard,
  OrderItemImageContainer,
  OrderItemQuantity,
  BackToCart,
} from "./order.style";

//state
import { useCartState } from "../../../../hooks";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//required modules
import { FreeMode } from "swiper";

const Order = () => {
  const router = useRouter();
  const routeHandler = () => router.replace("cart");

  const { cartItems } = useCartState();
  return (
    <OrderContainer>
      <OrderTitle>سفارش شما</OrderTitle>

      <Swiper
        spaceBetween={15}
        slidesPerView={3.5}
        freeMode={true}
        modules={[FreeMode]}
      >
        {cartItems?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <OrderItemCard>
                <OrderItemImageContainer>
                  <Image
                    alt="cart item image"
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

      <BackToCart onClick={routeHandler}>بازگشت به سبد خرید</BackToCart>
    </OrderContainer>
  );
};

export default Order;
