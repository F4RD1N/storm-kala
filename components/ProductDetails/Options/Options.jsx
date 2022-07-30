import React from "react";

//Styled Components
import {
  Container,
  Title,
  Item,
  ItemValue,
  HorizontalRuler,
} from "./Options.style";

//state
import { useProductState } from "../../../hooks";

const Options = () => {
  const { options } = useProductState();
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
      <HorizontalRuler />
      <Item>
        امکان برگشت کالا در گروه لپ تاپ و الترابوک با دلیل از خرید تنها در صورتی
        مورد قبول است که پلمب کالا باز نشده باشد.
      </Item>
    </Container>
  );
};

export default Options;
