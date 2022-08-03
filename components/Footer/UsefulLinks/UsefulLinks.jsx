import React from 'react'
import Link from 'next/link'

//Styled Components
import { Container, LinksContainer, LinksTitle, LinkItem } from './UsefulLinks.style'

const UsefulLinks = () => {
  return (
    <Container>
      <LinksContainer>
       <LinksTitle>خرید لباس</LinksTitle>
       <Link href='/category/men-clothing'><LinkItem>لباس مردانه</LinkItem></Link>
       <Link href='/category/women-clothin'><LinkItem>لباس زنانه</LinkItem></Link>
       <Link href='/category/kids-apparel'><LinkItem>لباس بچگانه</LinkItem></Link>
       <Link href='/category/boys-sportswear'><LinkItem>لباس اسپرت</LinkItem></Link>
      </LinksContainer>

      <LinksContainer>
       <LinksTitle>خرید کالای دیجیتال</LinksTitle>
       <Link href='/category/camera'><LinkItem>دوربین</LinkItem></Link>
       <Link href='/category/tablet'><LinkItem>تبلت</LinkItem></Link>
       <Link href='/category/network'><LinkItem>مودم و تجهیزات شبکه</LinkItem></Link>
       <Link href='/category/assembled-cases'><LinkItem>کیس های اسمبل شده</LinkItem></Link>
      </LinksContainer>

      <LinksContainer>
       <LinksTitle>خرید لوازم سفر و ورزش</LinksTitle>
       <Link href='/category/sleeping-bag'><LinkItem>کیسه خواب</LinkItem></Link>
       <Link href='/category/sports-hoverboard'><LinkItem>اسکوتر برقی</LinkItem></Link>
       <Link href='/category/bag-and-backpack'><LinkItem>کیف و کوله پشتی</LinkItem></Link>
       <Link href='/category/tent'><LinkItem>چادر</LinkItem></Link>
      </LinksContainer>

      <LinksContainer>
       <LinksTitle>شبکه های اجتماعی</LinksTitle>
       <Link href='/category/'><LinkItem>اینستاگرام</LinkItem></Link>
       <Link href='/category/'><LinkItem>تلگرام</LinkItem></Link>
       <Link href='/category/'><LinkItem>واتساپ</LinkItem></Link>
      </LinksContainer>
    </Container>
  )
}

export default UsefulLinks