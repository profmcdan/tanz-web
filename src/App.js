import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="courses-page">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
