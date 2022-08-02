import React, { useEffect } from "react";

//Styled Components
import {
  Container,
  Drawer,
  CloseDrawer,
  MainTitle,
  HorizontalRuler,
  Title
} from "./DrawerMenu.style";

//Icons
import { IoMdClose } from "react-icons/io";
import { AiOutlineCar } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { TbShirt, TbToolsKitchen } from "react-icons/tb";
import { GiPearlNecklace } from "react-icons/gi";
import { BiHomeAlt, BiMobileAlt } from "react-icons/bi";
import { MdOutlineToys,MdSportsSoccer } from "react-icons/md";

//Components
import Input from "./Input";
import Item from "./Item";

const DrawerMenu = ({ active, handler }) => {
  //prevent background scroll when drawer is open!
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
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
        <MainTitle>StormKala</MainTitle>
        <Input />
        <HorizontalRuler />
        <Item title='خانه' icon={<BiHomeAlt />}/>
        <HorizontalRuler />
        <Title>دسته بندی کالا ها</Title>
        <Item title='کالای دیجیتال' icon ={<BiMobileAlt />}/>
        <Item title='خودرو، ابزار و تجهیزات صنعتی' icon ={<AiOutlineCar />}/>
        <Item title='مد و پوشاک' icon ={<TbShirt />}/>
        <Item title='کالاهای سوپرمارکتی' icon ={<FiCoffee />}/>
        <Item title='اسباب بازی، کودک و نوزاد' icon ={<MdOutlineToys />}/>
        <Item title='زیبایی و سلامت' icon ={<GiPearlNecklace />}/>
        <Item title='خانه و آشپزخانه' icon ={< TbToolsKitchen />}/>
        <Item title='کتاب، لوازم تحریر و هنر' icon ={<BsBook />}/>
        <Item title='ورزش و سفر' icon ={<MdSportsSoccer />}/>
      </Drawer>
    </Container>
  );
};

export default DrawerMenu;
