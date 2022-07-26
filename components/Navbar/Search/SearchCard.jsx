import React from 'react'
import Image from 'next/image'
//styled Components
import { CardContainer, CardImageContainer, CardTitle } from './Search.style'
const SearchCard = ({data}) => {
  console.log(data)
  const {title_fa, images} = data
  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={images.main.url[0]} objectFit="cover" width={75} height={75}/>
      </CardImageContainer>
        <CardTitle>{title_fa}</CardTitle>
    </CardContainer>
  )
}

export default SearchCard