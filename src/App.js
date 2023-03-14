import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './reducers/navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         

        <Router>
        <Navbar /> 
          <Routes>
          <Route path="/" element={<Home />} /> 
            <Route path="/Cart" element={<Cart />} /> 
          </Routes>          
        </Router>
       
      </header>
    </div>
  );
}

export default App;
