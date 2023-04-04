import React from 'react'
import { Button, ChildContainer, Container, Image, Left, Right, Section, Title, SubTitle, Paragraph } from '../styles/Styles'

export default function Hero() {
  return (
    <Section>
      <Container>
        <ChildContainer>
          <Left>
            <Title>Think. Make. Solve.</Title>
            <SubTitle>What we do ?</SubTitle>
            <Paragraph>We enjoy creating delightful, human-created digital experiences.</Paragraph>
            <Button>Learn more</Button>
          </Left>
          <Right>
            {/* 3d model */}
            <Image src='public/img/ast.png' width={'600px'}></Image>
          </Right>
        </ChildContainer>
      </Container>
    </Section>
  )
}
