import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <Router>
      <Navbar />

      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<Aboutme />}
          />
          <Route
            path='/aboutme'
            element={<Aboutme />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/resume'
            element={<Resume />}
          />
          <Route
            path='/projects'
            element={<Projects />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
