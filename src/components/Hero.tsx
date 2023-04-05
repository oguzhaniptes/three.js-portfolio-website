import React from 'react'
import { Image, Button, ChildContainer, Container, Section, Title, SubTitle, Paragraph, LetterDiv, ImageDiv } from '../styles/Styles'

export default function Hero() {
  return (
    <Section>
      <Container>
        <ChildContainer>
          <LetterDiv>
            <Title>Think. Make. Solve.</Title>
            <SubTitle>What we do ?</SubTitle>
            <Paragraph>We enjoy creating delightful, human-created digital experiences.</Paragraph>
            <Button>Learn more</Button>
          </LetterDiv>
          <ImageDiv>
            {/* 3d model */}
            <Image src='./img/ast.png' width={'600px'}></Image>
          </ImageDiv>
        </ChildContainer>
      </Container>
    </Section>
  )
}
