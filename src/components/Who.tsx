import React from 'react'
import { Button, ChildContainer, Container, Section, Title, SubTitle, Paragraph, LetterDiv, ImageDiv } from '../styles/Styles'

export default function Who() {
  return (
    <Section>
      <Container>
        <ChildContainer>
          <ImageDiv>
            <Paragraph>asdaaaaaaaaas</Paragraph>
            <Paragraph>asdasaaaaaaaaaaaaaaaaaaaaa</Paragraph>
            <Paragraph>asdas</Paragraph>
            <Paragraph>asdas</Paragraph>
            <Paragraph>asdas</Paragraph>
          </ImageDiv>
          <LetterDiv>
            <Title>Think outside the square space.</Title>
            <SubTitle>Who are we ?</SubTitle>
            <Paragraph>a created group of desingers and developers with a passion for the arts.</Paragraph>
            <Button>See our works</Button>
          </LetterDiv>
        </ChildContainer>
      </Container>
    </Section>
  )
}
