import React from 'react';
import './Contact.css';
import mail from './../../media/mail.png';
import linkedinBlack from './../../media/linkedinBlack.png';

function Contact() {
  return (
    <section className="Contact white" id="contact">
        <div className="wrapper">
            <div className="title">Contact</div>
            <div className="subtitle">Fred McBride</div>
            <p>
                <a href="mailto:fred@ambcollaborative.com?subject=Mail from Your Site.">
                    <img src={mail} alt="fred@ambcollaborative.com" className="mail"/>
                    fred@ambcollaborative.com
                </a>
            </p>
            <p>
                <a href="https://uk.linkedin.com/in/fred-mcbride-05427b171" target="_blank">
                    <img src={linkedinBlack} alt="linkedin:Fred McBride " className="linkedin"/>
                </a>
            </p>

        </div>
        <Footer/>
    </section>
  );
}

export default Contact;

function Footer(){
    return <footer>AMB Collaborative &copy; {new Date().getFullYear()}</footer>
}
