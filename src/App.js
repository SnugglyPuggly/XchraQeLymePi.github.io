import React from 'react';
import Header from './components/Header'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import './styles/App.css';
import Body1 from './components/Body1';
import Body2 from './components/Body2';

//bababababa
function App() {
  return (
    <div className="App">
      <div className="header-navbar-container">
        <Header />
      </div>  

      <main className="main-content">
        <Body1 />
        <Body2 /> 
        
        


        <Footer />
      </main>
    </div>
  );
}

export default App;
