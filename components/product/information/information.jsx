import React from "react";

//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

//Styled Components
import { Container, Title, More } from "./information.style";

//Shared Styled Components
import { ReadMore } from "../../../styles/shared";

//Components
import InfoCard from "./infoCard";

//state
import { useProductState } from "../../../hooks";

//logic
import { useInformation } from "../../../hooks";

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
        <More><ReadMore onClick={toggleHandler} showFull={toggle}>
          {toggle ? "بستن" : "بیشتر"} <AiOutlineArrowLeft />
        </ReadMore></More>
      )}
    </Container>
  );
};

export default Information;
