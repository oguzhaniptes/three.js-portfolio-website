import React from 'react'
import { ChildContainer, Container, LetterDiv, ImageDiv, Section, List, Paragraph, PageListItem } from '../styles/Styles'
import styled from 'styled-components'


const data = [
  "Web Desing",
  "Development",
  "Illustration",
  "Product Desing",
  "Socual Media"
]

export default function Works() {
  return (
    <Section>
      <Container>
        <ChildContainer>
          <LetterDiv>
            <List>
              {data.map(item => (
                <PageListItem text={item} key={item}>{item}</PageListItem>
              ))}
            </List>
          </LetterDiv>
          <ImageDiv>
            <Paragraph>aaaaaaaaaaaaaaa</Paragraph>
            <Paragraph>aaaaaaaaaaaaaaa</Paragraph>
            <Paragraph>aaaaaaaaaaaaaaa</Paragraph>
            <Paragraph>aaaaaaaaaaaaaaa</Paragraph>
            <Paragraph>aaaaaaaaaaaaaaa</Paragraph>
          </ImageDiv>
        </ChildContainer>
      </Container>
    </Section>
  )
}
