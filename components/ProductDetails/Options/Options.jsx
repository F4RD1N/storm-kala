import React from "react";

//Styled Components
import { Container, Title, Item, ItemValue, HorizontalRuler } from "./Options.style";
const Options = () => {
  return (
    <Container>
      <Title>ویژگی ها</Title>

      <Item>
        فناوری صفحه‌نمایش : <ItemValue>Super AMOLED</ItemValue>
      </Item>
      <Item>
        اندازه : <ItemValue>6.4</ItemValue>
      </Item>
      <Item>
        شبکه های ارتباطی : <ItemValue>2G، 3G، 4G</ItemValue>
      </Item>
      <HorizontalRuler />
      <Item>
        امکان برگشت کالا در گروه لپ تاپ و الترابوک با دلیل  از خرید تنها
        در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
      </Item>
    </Container>
  );
};

export default Options;
