import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Hero from './components/Hero'
import StackDisplay from './components/StackDisplay'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StackDisplay />
    </div>
  );
}

export default App;
