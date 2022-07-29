import React from "react";

//Styled Components
import {
  AddressSection,
  AddressTitle,
  AddressContainer,
  AddressValue,
  IconContainer,
  ChangeAddress
} from "./Shipping.style";

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
        <AddressValue>خ. ملا رضا، خ. توحید</AddressValue>
      </AddressContainer>

      <ChangeAddress>تغییر | ویرایش</ChangeAddress>
    </AddressSection>
  );
};

export default Address;
