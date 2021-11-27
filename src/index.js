import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import navbar from './Components/Navbar'
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Discover from './Components/Discover';
import Awsome from './Components/Awsome';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <About />
    <Discover />
    <Awsome />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
