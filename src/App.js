import React from 'react';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="*"element={<Page404 />}/>
      </Routes>
    </div>
  );
}

export default App;
