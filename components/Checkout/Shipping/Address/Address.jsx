import React from "react";

//Styled Components
import {
  AddressSection,
  AddressTitle,
  AddressContainer,
  AddressValue,
  IconContainer,
  ChangeAddress
} from "./Address.style";

//Icons
import { HiOutlineLocationMarker } from "react-icons/hi";

const Address = () => {
  return (
    <AddressSection>
      <AddressTitle>آدرس تحویل سفارش</AddressTitle>

      <AddressContainer>
        <IconContainer>
          <HiOutlineLocationMarker />
        </IconContainer>
        <AddressValue>جاده قدیم فتح، سه راه شهریار، بعد از سعید آباد</AddressValue>
      </AddressContainer>

      <ChangeAddress onClick={() => alert('فعلا در دسترس نیست!')}>تغییر | ویرایش</ChangeAddress>
    </AddressSection>
  );
};

export default Address;
