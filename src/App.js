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

function changeFont(e){
    const b = document.querySelector('body');
    const cls = e.target.textContent;
    b.className = cls;
    console.log(b)
    const lis = document.querySelectorAll('.fonts li');
    lis.forEach(li=>li.style.color = '#fff')
    e.target.style.color = 'crimson';
}
