import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//Styled Components
import {
  Container,
  Drawer,
  CloseDrawer,
  ThemeContaienr,
  MainTitle,
  HorizontalRuler,
  Title,
} from "./DrawerMenu.style";

//Icons
import { IoMdClose } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";

//Components
import { Input, Item, DropDown } from "./";

//Constants
import { menu } from "../../../../constants";

//logic and state
import { useTheme, useDrawer } from "../../../../hooks";

const DrawerMenu = () => {
  const { themeHandler, theme } = useTheme();
  const { drawerStatus, closeHandler, drawerHandler } = useDrawer();

  //clost drawer when route changes
  const router = useRouter();
  useEffect(() => {
    if (drawerStatus) drawerHandler();
  }, [router.query]);
  return (
    <Container active={drawerStatus} onClick={closeHandler} className="drawer">
      <Drawer active={drawerStatus}>
        <CloseDrawer onClick={drawerHandler}>
          <IoMdClose />
        </CloseDrawer>

        <ThemeContaienr onClick={themeHandler}>
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </ThemeContaienr>
        <MainTitle>StormKala</MainTitle>
        <Input />
        <HorizontalRuler />
        <Title>اصلی</Title>
        {menu.main.map((item) => {
          return (
            <Link key={item.id} href={item.url}>
              <a>
                <Item title={item.title} icon={item.icon} />
              </a>
            </Link>
          );
        })}
        <HorizontalRuler />
        <Title>دسته بندی کالا ها</Title>
        {menu.category.map((item) => {
          return (
            <DropDown
              key={item.id}
              title={item.title}
              sub={item.sub}
              icon={item.icon}
            />
          );
        })}
        <HorizontalRuler />
        <Title>لینک های مفید</Title>
        {menu.links.map((item) => {
          return (
            <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
              <Item title={item.title} icon={item.icon} />
            </a>
          );
        })}
      </Drawer>
    </Container>
  );
};

export default DrawerMenu;
