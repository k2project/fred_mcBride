import React from 'react';
import './Top.css';
import logo_transparent from './../../media/logo_transparent.png';
// import linkedin from './../../media/linkedin.png';

function Top() {
  return (
    <section className="Top black">
        <Nav/>
        <div className="wrapper">
            <img src={logo_transparent} alt="logo"/>
            <div className="title">International Consultancy <br/>in Change Management and Business Administration. </div>
            <div className="subtitle"> Director: Fred McBride </div>
        </div>
    </section>
  );
}

export default Top;

function Nav(){
    return <div className="Nav">
        <a href="#aboutAMB">About AMB</a>
        <a href="#aboutFred">About Fred</a>
        <a href="#cv">CV</a>
        <a href="#contact">Contact</a>
    </div>
}
