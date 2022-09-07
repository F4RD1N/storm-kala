import React from "react";

//Styled Components
import { Container } from "./trusts.style";

//Components
import Trust from "./Trust";

const Trusts = () => {
  return (
    <Container>
      <Trust source="https://www.digikala.com/statics/img/png/rezi.png" />
      <Trust source="https://www.digikala.com/statics/img/png/kasbokar.png" />
      <Trust source="https://www.digikala.com/statics/img/png/enamad.png" />
    </Container>
  );
};

export default Trusts;
