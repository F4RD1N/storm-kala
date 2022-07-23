import React from 'react'


//Styled Components
import { Container, LinksContainer, LinksTitle, Link } from './UsefulLinks.style'

const UsefulLinks = () => {
  return (
    <Container>
      <LinksContainer>
       <LinksTitle>خرید</LinksTitle>
       <Link>لباس مردانه</Link>
       <Link>لباس زنانه</Link>
       <Link>لباس بچگانه</Link>
       <Link>لباس مجلسی</Link>
       <Link>لباس اسپرت</Link>
      </LinksContainer>

      <LinksContainer>
       <LinksTitle>اطلاعات مارکت</LinksTitle>
       <Link>درباره ما</Link>
       <Link>قوانین و مقررات</Link>
       <Link>تماس با ما</Link>
       <Link>فرصت های شغلی</Link>
       <Link>همکاری تجاری</Link>
      </LinksContainer>

      <LinksContainer>
       <LinksTitle>خدمات مشتریان</LinksTitle>
       <Link>پرسش های متداول</Link>
       <Link>شرایط بازگشت</Link>
       <Link>راهنمای خرید</Link>
       <Link>فروش غیر حضوری</Link>
      </LinksContainer>

      <LinksContainer>
       <LinksTitle>شبکه های اجتماعی</LinksTitle>
       <Link>اینستاگرام</Link>
       <Link>تلگرام</Link>
       <Link>واتساپ</Link>
      </LinksContainer>
    </Container>
  )
}

export default UsefulLinks