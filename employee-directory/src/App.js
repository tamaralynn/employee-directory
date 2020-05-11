import React from 'react';
import './App.css';
import List from './components/List/list.js';
import Navbar from './components/Navbar/navbar.js';
import { ContainedButtons, BasicTextFields } from  './components/Search/search.js';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <BasicTextFields/>
      <ContainedButtons/>
      <List/>
    </div>
  );
}

export default App;
