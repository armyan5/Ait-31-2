import React from 'react';

import './App.css';
import Counter from './components/Counter';
import Sandwich from './components/Sandwich';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <>
        <Counter />
        <Sandwich/>
        <Book/>
        </>
    </div>
  );
}

export default App;
