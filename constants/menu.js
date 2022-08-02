//Icons
import { AiOutlineCar } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { BsBook, BsTelegram, BsGithub, BsInstagram } from "react-icons/bs";
import { TbShirt, TbToolsKitchen } from "react-icons/tb";
import { GiPearlNecklace } from "react-icons/gi";
import { BiHomeAlt, BiMobileAlt } from "react-icons/bi";
import { MdOutlineToys, MdSportsSoccer } from "react-icons/md";

const menu = {
  main: [{ id: 1, title: "خانه", icon: <BiHomeAlt />, url: "/" }],
  category: [
    {
      id: 1,
      title: "کالای دیجیتال",
      icon: <BiMobileAlt />,
      sub: [
        {
          id: 1,
          title: "لوازم جانبی گوشی",
          code: "mobile-accessories",
        },
        {
          id: 2,
          title: "گوشی موبایل",
          code: "mobile-phone",
        },
        {
          id: 3,
          title: "لپتاپ",
          code: "notebook-netbook-ultrabook",
        },
        {
          id: 4,
          title: "ساعت هوشمند",
          code: "wearable-gadget",
        },
      ],
    },
    {
      id: 2,
      title: "تجهیزات صنعتی",
      icon: <AiOutlineCar />,
      sub: [
        {
          id: 1,
          title: "ابزار برقی",
          code: "power-tools",
        },
        {
          id: 2,
          title: "ابزار باغبانی",
          code: "gardening-tools",
        },
        {
          id: 3,
          title: "ایمنی و کار",
          code: "safety-tools",
        },
        {
          id: 4,
          title: "حفاظتی و امنیتی",
          code: "protection-and-security-equipment",
        },
      ],
    },
    {
      id: 3,
      title: "مد و پوشاک",
      icon: <TbShirt />,
      sub: [
        {
          id: 1,
          title: "مردانه",
          code: "mens-apparel",
        },
        {
          id: 2,
          title: "زنانه",
          code: "womens-apparel",
        },
        {
          id: 3,
          title: "زیورآلات زنانه",
          code: "women-jewelry",
        },
        {
          id: 4,
          title: "بچه گانه",
          code: "kids-apparel",
        },
      ],
    },
    {
      id: 4,
      title: "کالاهای سوپرمارکتی",
      icon: <FiCoffee />,
      sub: [
        {
          id: 1,
          title: "صبحانه",
          code: "breakfast",
        },
        {
          id: 2,
          title: "لبنیات",
          code: "dairy",
        },
        {
          id: 3,
          title: "خوار و بار",
          code: "groceries",
        },
        {
          id: 4,
          title: "میوه و سبزی",
          code: "fruits-and-vegetables",
        },
      ],
    },
    {
      id: 5,
      title: "کودک و نوزاد",
      icon: <MdOutlineToys />,
      sub: [
        {
          id: 1,
          title: "اسباب بازی",
          code: "toys",
        },
        {
          id: 2,
          title: "لوازم شخصی",
          code: "personal-accessories",
        },
        {
          id: 3,
          title: "بازی و سرگرمی",
          code: "entertainment-and-games-equipment",
        },
        {
          id: 4,
          title: "کنسول",
          code: "game-console",
        },
      ],
    },
    {
      id: 6,
      title: "زیبایی و سلامت",
      icon: <GiPearlNecklace />,
      sub: [
        {
          id: 1,
          title: "لوازم آرایشی",
          code: "beauty",
        },
        {
          id: 2,
          title: "لوازم بهداشتی",
          code: "personal-care",
        },
        {
          id: 3,
          title: "عطر و ادکلن",
          code: "perfume-all",
        },
        {
          id: 4,
          title: "ابزار سلامت و طبی",
          code: "health-care",
        },
      ],
    },
    {
      id: 7,
      title: "خانه و آشپزخانه",
      icon: <TbToolsKitchen />,
      sub: [
        {
          id: 1,
          title: "صوتی و تصویری",
          code: "video-audio-entertainment",
        },
        {
          id: 2,
          title: "آشپزخانه",
          code: "home-kitchen-appliances",
        },
        {
          id: 3,
          title: "مواد شوینده",
          code: "-detergents",
        },
        {
          id: 4,
          title: "وسایل حمام",
          code: "bath",
        },
      ],
    },
    {
      id: 8,
      title: "کتاب و لوازم تحریر",
      icon: <BsBook />,
      sub: [
        {
          id: 1,
          title: "کتاب و مجله",
          code: "magazines",
        },
        {
          id: 2,
          title: "کتاب صوتی",
          code: "audio-book",
        },
        {
          id: 3,
          title: "نرم افزار",
          code: "software",
        },
        {
          id: 4,
          title: "لوازم تحریر",
          code: "stationery",
        },
      ],
    },
    {
      id: 9,
      title: "ورزش و سفر",
      icon: <MdSportsSoccer />,
      sub: [
        {
          id: 1,
          title: "پوشاک ورزشی مردانه",
          code: "men-sportswear",
        },
        {
          id: 2,
          title: "پوشاک ورزشی زنانه",
          code: "women-sportwear",
        },
        {
          id: 3,
          title: "دوچرخه",
          code: "bicycle",
        },
        {
          id: 4,
          title: "تجهیزات سفر",
          code: "traveling-equipment",
        },
      ],
    },
  ],
  links: [
    {
      id: 1,
      title: "Telegram",
      icon: <BsTelegram />,
      url: "",
    },
    {
      id: 2,
      title: "Github",
      icon: <BsGithub />,
      url: "",
    },
    {
      id: 3,
      title: "Instagram",
      icon: <BsInstagram />,
      url: "",
    },
  ],
};

export default menu;
