import React from 'react';
import './Top.css';
import logo_transparent from './../../media/logo_transparent.png';
// import linkedin from './../../media/linkedin.png';

function Top() {
  return (
    <section className="Top black">
        <Nav/>
        <img src={logo_transparent} alt="logo"/>
        <div className="title">International Consultancy in Change Management and Business Administration. </div>
        <div className="subtitle"> Director: Fred McBride </div>
    </section>
  );
}

export default Top;

function Nav(){
    return <div className="Nav">
        <a href="#aboutAMB">About</a>
        <a href="#aboutFred">Management</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        {/* <a href="https://uk.linkedin.com/in/fred-mcbride-05427b171"><img src={linkedin} alt="linkedin link"/></a> */}
    </div>
}
