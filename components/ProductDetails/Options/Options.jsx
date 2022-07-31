import React from "react";

//Styled Components
import {
  Container,
  Title,
  Item,
  ItemValue,
  HorizontalRuler,
  ContentDescription,
} from "./Options.style";

//state
import { useProductState } from "../../../hooks";

const Options = () => {
  const { options, category } = useProductState();
  return (
    <Container isVisible={options}>
      <Title>ویژگی ها</Title>

      {options?.map((item) => {
        const { title, values } = item;
        return (
          <Item key={title}>
            {title}:
            {values.map((item) => (
              <ItemValue key={item}>{item}</ItemValue>
            ))}
          </Item>
        );
      })}
      {category?.content_description && (
        <>
          <HorizontalRuler />
          <ContentDescription>
            {category?.content_description}
          </ContentDescription>
        </>
      )}
    </Container>
  );
};

export default Options;
