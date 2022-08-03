import React from 'react';
import ReactDOM from 'react-dom/client';
import RandomQuoteMachine from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {margin: 0; padding: 0;}
  html {font-size: clamp(10px, 0.6rem + 0.35vw, 20px);}
  #app {
    --bg-opacity:1;
    --bg-start:#505050;
    --bg-end:#101010;
    background:#252525;
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    z-index:1;
    transition: all 0.6s ease;
  }
  #app:before {
    content:'';
    display:block;
    width:100%;
    height:100%;
    position:absolute;
    top:0; left:0;
    transition:all 0.6s linear;
    z-index:-1;
    background:linear-gradient(40deg, var(--bg-start), transparent);
    opacity:var(--bg-opacity);
  }
  #app:after {
    content:'';
    display:block;
    width:100%;
    height:100%;
    position:absolute;
    top:0; left:0;
    transition:all 0.6s linear;
    z-index:-2;
    background:linear-gradient(50deg, transparent, var(--bg-end));
    opacity:var(--bg-opacity);
  }
`;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <RandomQuoteMachine />
    <GlobalStyle/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
