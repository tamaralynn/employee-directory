import React from 'react';
import './App.css';
import List from './components/List/list.js';
import Search from  './components/Search/search.js';

function App() {
  return (
    <div className="App">
      <Search/>
      <List/>
    </div>
  );
}

export default App;
