import React from "react";

//Icons 
import {AiOutlineArrowLeft} from 'react-icons/ai'

//Styled Components
import {
  Container,
  Title,
  ItemContainer,
  Item,
  ItemValue,
  HorizontalRuler,
} from "./Information.style";

//Shared Styled Components
import { ReadMore } from "../../../styles/shared";

const Information = () => {
  return (
    <Container>
      <Title>مشخصات</Title>

      <ItemContainer>
        <Item>وزن</Item>
        <ItemValue>۱.۷ کیلوگرم</ItemValue>
      </ItemContainer>

      <ItemContainer>
        <Item>ابعاد</Item>
        <ItemValue>۱.۷ کیلوگرم</ItemValue>
      </ItemContainer>

      <ItemContainer>
        <Item>وزن</Item>
        <ItemValue>۳۶۲.۲x۲۵۳.۴x۱۹.۹</ItemValue>
      </ItemContainer>

      <ItemContainer>
        <Item>سازنده پردازنده</Item>
        <ItemValue>Intel</ItemValue>
      </ItemContainer>

      <ItemContainer>
        <Item>سری پردازنده</Item>
        <ItemValue>Celeron</ItemValue>
      </ItemContainer>
      
      <ReadMore>بیشتر <AiOutlineArrowLeft /></ReadMore>

    </Container>
  );
};

export default Information;
