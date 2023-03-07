import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './reducers/navigation';
import Drinks from './reducers/lemonades'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />        
        <Counter />
        <Drinks />

      </header>
    </div>
  );
}

export default App;
