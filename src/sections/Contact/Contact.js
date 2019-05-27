import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact white" id="contact">
            <div className="title">Contact</div>
            <div className="subtitle">Fred McBride</div>
            <p>Email: fred@ambcollaborative.com</p>
            <p>LinkedIn: <a href="https://uk.linkedin.com/in/fred-mcbride-05427b171">fred-mcbride-05427b171</a></p>
            <Footer/>
    </section>
  );
}

export default Contact;

function Footer(){
    return <footer>AMB Collaborative &copy; {new Date().getFullYear()}</footer>
}
