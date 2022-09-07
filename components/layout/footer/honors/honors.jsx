import React from "react";

//Styled Compoennts
import { Container } from "./honors.style";

//Icons
import { BsShieldCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

//Components
import Honor from "./honor";

const Honors = () => {
  return (
    <Container>
      <Honor title="ضمانت اصالت کالا" icon={<BsShieldCheck />} />
      <Honor title="ارسال اکسپرس" icon={<FaShippingFast />} />
      <Honor title="تخفیفات شگفت انگیز" icon={<TbDiscount2 />} />
      <Honor title="پشتیبانی 24 ساعته" icon={<BiSupport />} />
    </Container>
  );
};

export default Honors;

