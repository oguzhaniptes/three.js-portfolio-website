import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'
import './index.css'
import Navbar from './components/Navbar'
import { Main,Container } from './styles/Styles'



function App() {

  return (
    <Main>
      <Navbar></Navbar>
      <Container>
        <Hero></Hero>
        <Who></Who>
        <Works></Works>
        <Contact></Contact>
      </Container>
    </Main>
  )
}

export default App