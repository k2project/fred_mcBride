import React from 'react';
import './App.css';
import Top from './sections/Top/Top';
import About from './sections/About/About';
import Resume from './sections/Resume/Resume';
import Contact from './sections/Contact/Contact';


// const t = new Date().getTime();
// //30 Sept
// const exp = new Date(2019, 9, 30, 0, 0, 0, 0).getTime();
// const out = exp>t? true : null;
const out = true;

function App() {
  return (
      <div>
          {out && <div className="App">
              <div className="bg_fixed"></div>
              <Top/>
              <About/>
              <Resume/>
              <Contact/>
          </div> }
      </div>

  );
}

export default App;
