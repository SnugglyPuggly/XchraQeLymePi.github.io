import React from 'react';
import Header from './Header'; 
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import '../styles/App.css';
import Body1 from './Body1';
import Body2 from './Body2';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//bababababa
//balalalala
function Home() {
  return (
    <div className="App">
      <div className="header-navbar-container">
      </div>  

      <main className="main-content">
        <Body1 />
        <Body2 /> 
        
        
      </main>
    </div>
  );
}

export default Home;
