import React, { useEffect } from "react";
import Link from "next/link";

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
import Input from "./Input";
import Item from "./Item";
import DropDown from "./DropDown/DropDown";

//Constants
import { menu } from "../../../constants";

//logic
import { useTheme } from "../../../hooks";

//state
import { useConfigState } from "../../../hooks";

const DrawerMenu = ({ active, handler }) => {
  const { toggleTheme } = useTheme();
  const { theme } = useConfigState();
  //prevent background scroll when drawer is open!
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflow = "unset";
  }, [active]);

  //close the drawer when clicked on background
  const closeHandler = (event) => {
    if (event.target.classList.contains("drawer")) {
      handler();
    }
  };
  return (
    <Container active={active} onClick={closeHandler} className="drawer">
      <Drawer active={active}>
        <CloseDrawer onClick={handler}>
          <IoMdClose />
        </CloseDrawer>

        <ThemeContaienr onClick={toggleTheme}>
          {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
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
