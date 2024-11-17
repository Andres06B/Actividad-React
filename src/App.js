import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Services from './pages/services';
import Team from './pages/team';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} redirect='/home' />
          <Route path='/services' element={<Services />} />
          <Route path='/team' element={<Team />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
