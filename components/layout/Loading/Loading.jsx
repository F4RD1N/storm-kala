import React from 'react'


//Styled Components
import { Container, Card } from './loading.style'

//Components
import { LoadingIndicator } from '../../shared'

const Loading = () => {
  return (
    <Container>
        <Card><LoadingIndicator/></Card>
    </Container>
  )
}

export default Loading