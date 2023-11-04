//importing all necessary components
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Body from './components/body';
import reportWebVitals from './reportWebVitals';

/*
  this renders the body component, which in turn renders the 
  navbar and login
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Body />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
