import React from "react";

//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

//Styled Components
import { Container, Title, Description } from "./Introduce.style";

//Shared Styled Components
import { ReadMore } from "../../../styles/shared";

const Introduce = () => {
  return (
    <Container>
      <Title>معرفی</Title>
      <Description showFull={false}>
        لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 3 15IGL05 - Z یکی از لپ‌تاپ‌های
        کمپانی نام آشنای لنوو است این لپ‌تاپ از لپ‌تاپ‌های اقتصادی لنوو محسوب
        می‌شود که طراحی آن نسبت به نسل قبلی بهبود قابل ملاحظه‌ای پیدا کرده و
        سخت‌افزار آن هم به روز شده است. پردازنده N4020 اینتل با 4 مگابایت حافظه
        کش، رم 4 گیگابایتی از نوع DDR4 و پردازنده گرافیکی Integrated Intel UHD
        Graphics 600 آنبرد مجموعه مشخصات سخت‌افزاری این لپ‌تاپ هستند. 1 ترابایت
        حافظه داخلی از نوع HDD هم شما را خرید از هارد اکسترنال بی‌نیاز می‌سازد و
        تا حد مناسبی پاسخگوی نیاز کاربر خواهد بود. تنوع پورت و وجود درگاه‌هایی
        نظیر USB، HDMI و کارتخوان هم امکان اتصال انواع دستگاه‌های دیجیتال و
        ابزارهای جانبی به لپ‌تاپ را فراهم خواهد کرد و احتمال نیاز کاربر به خرید
        هاب یا مبدل را پایین می‌آورد. به طور کلی می‌توان گفت IdeaPad 3 15IGL05 -
        Z یکی از لپ‌تاپ‌های مقرون به صرفه‌ی موجود در بازار است که امکانات قابل
        قبولی را برای کاربر به ارمغان می‌آورد و برای استفاده‌های عمومی و
        غیرحرفه‌ای کافی خواهد بود.
      </Description>
      <ReadMore>
        بیشتر <AiOutlineArrowLeft />
      </ReadMore>
    </Container>
  );
};

export default Introduce;
