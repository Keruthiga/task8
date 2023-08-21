import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Benefits from './components/Benefits';
import Blog from './components/Blog';
import View from './components/View';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/view' element={<View />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
