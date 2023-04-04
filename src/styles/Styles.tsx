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
  justify-content:center;
  justify-item:center;
  gap:20px
`
export const Right = styled.div`
`
export const Left = styled.div`
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

export const List = styled.ul`
  display:flex;
  gap:20px;
`

export const ListItem = styled.li`
  list-style-type:none;
  cursor:pointer;
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
  width:120px;
  padding:10px;
  color:white;
  background-color: #FF0076;
  border-radius:20px;
  border-style: none;
  border:none;
  font-size:16px;
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

export const SubTitle = styled.h2`
  color: #FF0076;
  font-size:32px;
`
export const Paragraph = styled.p`
  font-size:20px;
`
