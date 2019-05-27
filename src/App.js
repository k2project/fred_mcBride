import React from 'react';
import './App.css';
import Top from './sections/Top/Top';
import About from './sections/About/About';
import Resume from './sections/Resume/Resume';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <div className="App">
        <div className="bg_fixed"></div>
        <Top/>
        <About/>
        <Resume/>
        <Contact/>
    </div>
  );
}

export default App;
