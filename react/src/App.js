import React from 'react';
import './App.css';
import FooterPage from './Components/Footer/Footer'
import HeaderPage from './Components/Header/Header'
import Router from './Components/Navigation/Router';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <>
      <div className="container">
        <HeaderPage />
        <Navigation />
        <Router />
        <FooterPage />
      </div>




    </>
  );
}

export default App;
