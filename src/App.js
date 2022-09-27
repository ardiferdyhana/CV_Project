import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Components/Homepage'
import About from './Components/About'
import Resume from './Components/Resume';


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Homepage />
      <About />
      <Resume />
    </ChakraProvider>
  )
}

export default App;
