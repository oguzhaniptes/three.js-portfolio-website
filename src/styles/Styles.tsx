import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width:none;
  &::-webkit-scrollbar{
    display:none;
  }
  color:white;
`

export const ChildContainer = styled.div`
  height:100vh;
  width:1200px;
  display:flex;
  flex-direction:row;
  margin: 0 auto; 
  align-items:center;
  // justify-content: space-around;
  justify-item:center;
  gap:20px;

`
export const LetterDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;
  weight:100vh;
  `
export const ImageDiv = styled.div`
  flex:1;
  margin-top: 80px;


`

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
`
export const Main = styled.div`
  background: url("./img/bg.jpeg");
  color:white;
  padding-top:10px;
`

export const NavbarDiv = styled.div`
  width:1200px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:fixed;
`

export const NavbarSection = styled.div`
  display:flex;
  justify-content:center;
`

export const Links = styled.div`
  display:flex;
  align-items:center;
  gap:20px
`

export const NavbarList = styled.ul`
  display:flex;
  gap:20px;
`

export const List = styled.ul`
  display:flex;
  flex-direction:column;
  justify-content: start;
  gap:20px;
`

export const ListItem = styled.li`
  list-style-type:none;
  cursor:pointer;
`

export const PageListItem = styled.li`
  list-style-type:none;
  cursor:pointer;
  font-size:100px;
  font-weight:bold;
  color:transparent;
  -webkit-text-stroke:2px white;
  position:relative;
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`

export const Icon = styled.img`
 cursor:pointer;
`
export const Icons = styled.div`
  display:flex;
  align-items:center;
  gap:40px
`

export const Button = styled.button`
  cursor:pointer;
  width:160px;
  padding:10px;
  color:white;
  background-color: #FF0076;
  border-radius:20px;
  border-style: none;
  border:none;
  font-size:16px;
  font-weight:bold;
`

export const Logo = styled.img`
  height:60px;
  weight:auto;
  cursor:pointer;
`

export const Image = styled.img`
  object-fit: contain;

  animation: animate 2s infinite ease alternate;
 
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`

export const Title = styled.h1`
  font-size:64px;
`
export const Title2 = styled.h1`
  font-size:48px;
`

export const SubTitle = styled.h2`
  color: #FF0076;
  font-size:32px;
`
export const Paragraph = styled.p`
  font-size:20px;
`

export const FormDiv = styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
  // background-color:white;
`
export const Form = styled.form`
  display:flex;
  justify-content: center;
  flex-direction:column;
  width:500px;
  gap:20px;
`

export const FormButton = styled.button`
  cursor:pointer;
  padding:10px;
  color:white;
  background-color: #FF0076;
  border-radius:5px;
  border-style: none;
  border:none;
  font-size:16px;
  font-weight:bold;
`

export const Input = styled.input`
  padding:12px;
  border:none;
  border-radius:5px;
`

export const TextArea = styled.textarea`
  padding:12px;
  border-radius:8px;

`