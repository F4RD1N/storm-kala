import React from "react";
import Image from "next/image";

//Styled Compoennts
import { Container, Honor, IconContainer, HonorTitle } from "./Honors.style";

//Icons
import { BsShieldCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
//Images
import Express from "../../../assets/digital.png";
const Honors = () => {
  return (
    <Container>
      {/* {[0, 1, 2, 3].map((item) => {
        return (
          <Honor key={item}>
            <ImageContainer>
              <Image src={Express} width={100} height={100} objectFit="cover" />
            </ImageContainer>
            <HonorTitle>تضمین بهترین قیمت</HonorTitle>
          </Honor>
        );
      })} */}

      <Honor>
        <IconContainer><BsShieldCheck /></IconContainer>
        <HonorTitle>ضمانت اصالت کالا</HonorTitle>
      </Honor>

      <Honor>
        <IconContainer><FaShippingFast /></IconContainer>
        <HonorTitle>ارسال اکسپرس</HonorTitle>
      </Honor>

      <Honor>
        <IconContainer><TbDiscount2 /></IconContainer>
        <HonorTitle>تخفیفات شگفت انگیز</HonorTitle>
      </Honor>

      <Honor>
        <IconContainer><BiSupport /></IconContainer>
        <HonorTitle>پشتیبانی 24 ساعته</HonorTitle>
      </Honor>

    </Container>
  );
};

export default Honors;
