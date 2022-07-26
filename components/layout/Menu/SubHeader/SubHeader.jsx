import React from 'react'

//Styled Components
import { Container, Item, Content } from './subHeader.style'

//Components
import DropDown from './dropDown/dropDown'

const SubHeader = () => {
  return (
    <Container>
       <Content>
       <Item>خانه</Item>
        <DropDown title='دسته بندی کالا ها' />
        <Item>سوپرمارکت</Item>
        <Item>تخفیفات</Item>
        <Item>لینک های مفید</Item>
       </Content>
    </Container>
  )
}

export default SubHeader