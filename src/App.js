import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Components/Homepage'
import About from './Components/About'
import Resume from './Components/Resume'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ActiveNavbar from './Components/ActiveNavbar';
import Achievement from './Components/Achievement';


function App() {
  return (
    <ChakraProvider>
      <Homepage />
      <About />
      <Resume />
      <Achievement />
      <Contact />
      <Footer />
      <ActiveNavbar />
    </ChakraProvider>
  )
}

export default App;

