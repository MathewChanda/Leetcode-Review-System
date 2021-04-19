import logo from './logo.svg';
import './App.css';
import { ChakraProvider,Alert,AlertIcon,Stack} from '@chakra-ui/react';
import Login from './Component/Login/Login'
function App() {
  return (
    <ChakraProvider>
      <div style={ { width: 219, height: 315 } }>
        <Login/>
      </div>
    </ChakraProvider>
  );
}

export default App;
