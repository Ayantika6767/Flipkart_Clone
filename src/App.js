//import logo from './logo.svg';
import  React from 'react';
import './App.css';
import NavBar from "./NavBar";
import Header from './Header.js';
import Slider from './Slider.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Slider/>
    </div>
  );
}

export default App;
