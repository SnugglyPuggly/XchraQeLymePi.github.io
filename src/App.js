import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Awareness from './components/Awareness';
import Header from './components/Header';
import Preorder from './components/Preorder';
import Connect from './components/Charity';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/lunch-preorder" element={<Preorder />} />
        <Route path="/connect-with-nonprofits" element={<Connect />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
