import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

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

//Components
import InfoCard from "./InfoCard";

//state
import useProductState from "../useProductState";

const Information = () => {
  //toogle view
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle((currentValue) => !currentValue);
  const router = useRouter();
  useEffect(() => setToggle(false), [router.query]);

  const { information } = useProductState();

  return (
    <Container showFull={toggle}>
      <Title>مشخصات</Title>

      {information?.map((item) => {
        const { title, values } = item;
        return <InfoCard key={title} title={title} value={values[0]} />;
      })}

      <ReadMore onClick={toggleHandler} showFull={toggle}>
        {toggle ? "کمتر" : "بیشتر"} <AiOutlineArrowLeft />
      </ReadMore>
    </Container>
  );
};

export default Information;
