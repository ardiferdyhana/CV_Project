import './App.css';
import Homepage from './Components/Homepage.js'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  )
}

export default App;
