import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;  
    margin: 0;
    padding: 0;
  }  

  *::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  *::-webkit-scrollbar
  {
    width: 7px;
    background-color: #F5F5F5;
  }

  *::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }

  html , body, #root {
    height:100vh;
    font-family:  Lato, Helvetica, Sans-Serif;
  }

  div {
    margin:0;
  }
`;

export default GlobalStyle;
