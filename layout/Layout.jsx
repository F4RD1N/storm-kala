import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Header, Footer, DrawerMenu, SubHeader } from "../components";
import { Container } from "./Layout.style";

const Layout = ({ children }) => {
  //Drawer Menu Handling
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const drawerHandler = () => setToggleDrawer((currentValue) => !currentValue);

  //close the drawer when route changes
  const router = useRouter();
  useEffect(() => {
    setToggleDrawer(false);
  }, [router.query]);

  return (
    <Container>
      <Header drawerHandler={drawerHandler} />
      <DrawerMenu active={toggleDrawer} handler={drawerHandler} />
      {/* <SubHeader /> */}
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
