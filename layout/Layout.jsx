import React, { useState } from "react";

import { Header, Footer, DrawerMenu } from "../components";
import { Container } from "./Layout.style";

const Layout = ({ children }) => {
  //Drawer Menu Handling
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const drawerHandler = () => setToggleDrawer((currentValue) => !currentValue);

  return (
    <Container>
      <Header drawerHandler={drawerHandler} />
      <DrawerMenu active={toggleDrawer} handler={drawerHandler}/>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
