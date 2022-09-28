import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Components/Homepage'
import About from './Components/About'
import Resume from './Components/Resume'
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Homepage />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </ChakraProvider>
  )
}

export default App;
