import React, { useState, useEffect, useRef } from "react";

//Styled Components
import {
  Container,
  Titlebar,
  Title,
  AddCode,
  CodeContainer,
  CodeInput,
  AddButton,
  CodeAlreadyUsed,
  RemoveCode,
} from "./discount.style";

//state & logic
import { useCartState, useDiscount } from "../../../../hooks";

const Discount = () => {
  const [toggle, setToggle] = useState(false);

  const { discountHandler, discountCode, inputHandler, clearDiscountHandler } = useDiscount();
  const { discount } = useCartState();

  //focus input when add code button clicked
  const inputRef = useRef(null);
  useEffect(() => {
    toggle && inputRef.current && inputRef.current.focus();
  }, [toggle]);

  return (
    <Container toggle={toggle}>
      <Titlebar>
        <Title>کد تخفیف</Title>
        <AddCode onClick={() => setToggle((currentValue) => !currentValue)}>
          افزودن کد تخفیف
        </AddCode>
      </Titlebar>

      {toggle && (
        <CodeContainer>
          {discount === 0 ? (
            <>
              <CodeInput
                placeholder="از این کد استفاده کنید: F4RD1N"
                ref={inputRef}
                value={discountCode}
                onChange={inputHandler}
              />
              <AddButton onClick={discountHandler}>اعمال تخفیف</AddButton>
            </>
          ) : (
              <CodeAlreadyUsed>
                تخفیف اعمال شده است! <RemoveCode onClick={clearDiscountHandler}>حذف تخفیف</RemoveCode>
              </CodeAlreadyUsed>
          )}
        </CodeContainer>
      )}
    </Container>
  );
};

export default Discount;
