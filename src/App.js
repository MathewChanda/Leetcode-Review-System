import logo from './logo.svg';
import './App.css';
import { ChakraProvider,Alert,AlertIcon,Stack} from '@chakra-ui/react';
import Login from './Component/Login/Login'
function App() {
  return (
    <ChakraProvider>
      <div>
        <Login/>
      </div>
    </ChakraProvider>
  );
}

export default App;
