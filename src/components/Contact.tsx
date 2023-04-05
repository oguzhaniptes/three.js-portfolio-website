import React from 'react'
import { Title2, FormButton, TextArea, Section, Form, Input, ImageDiv } from '../styles/Styles'
import styled from 'styled-components';
import MapChart from './Map';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`


export default function Contact() {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title2>Contact Us</Title2>
            <Input placeholder='Name'></Input>
            <Input placeholder='Email'></Input>
            <TextArea rows={10} placeholder='Write your message'></TextArea>
            <FormButton>Send</FormButton>
          </Form>
        </Left>
        <ImageDiv>
          <MapChart></MapChart>
        </ImageDiv>
      </Container>
    </Section>
  )
}
