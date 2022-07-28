import React from "react";

//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

//Styled Components
import { Container, Title } from "./Information.style";

//Shared Styled Components
import { ReadMore } from "../../../styles/shared";

//Components
import InfoCard from "./InfoCard";

//state
import useProductState from "../useProductState";

//logic
import useInformation from "./useInformation";

const Information = () => {
  const { toggle, toggleHandler } = useInformation();

  const { information } = useProductState();

  return (
    <Container showFull={toggle}>
      <Title>مشخصات</Title>

      {information?.map((item) => {
        const { title, values } = item;
        return <InfoCard key={title} title={title} value={values[0]} />;
      })}

      {information?.length > 4 && (
        <ReadMore onClick={toggleHandler} showFull={toggle}>
          {toggle ? "کمتر" : "بیشتر"} <AiOutlineArrowLeft />
        </ReadMore>
      )}
    </Container>
  );
};

export default Information;
