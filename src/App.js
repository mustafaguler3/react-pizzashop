// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"
import { Menu } from './Menu/Menu';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: 'DynaPuff', cursive;
  }
`

function App() {
  return (
    <div>
    <GlobalStyle />
      <Navbar />    
      <Banner /> 
      <Menu/>
    </div>
  );
}

export default App;
