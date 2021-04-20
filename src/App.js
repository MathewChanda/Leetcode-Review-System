import logo from './logo.svg';
import './App.css';
import { ChakraProvider,Alert,AlertIcon,Stack} from '@chakra-ui/react';
import Login from './Component/Login/Login'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <ChakraProvider>
      <div style={ { width: 219, height: 315 } }>
        <Router>
          <Switch>
            <Route exact path="/*">
              <Login/>
            </Route>
            <Route path="/lc-not-avalilable">
              <h1>Sign into Leetcode</h1>
            </Route>
            <Route path="/please-go-to-lc">
              <h1>Sign into Leetcode</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
