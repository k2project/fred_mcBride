import React from 'react';
import './Resume.css';
import fredMcBride from './../../media/fredMcBride.jpeg';


function Resume() {
  return (
    <section className="Resume black">
        <div className="wrapper">
            <img src={fredMcBride} alt="Fred McBride"  id="aboutFred"/>
            <div className="title">About Fred</div>
            <div className="subtitle">Fred McBride has 30 years experience in business administration with a proven track record in leading and achieving large scale programmes of transformation across children and family, older people and adult services.</div>
            <p className="p_intro">As former Chief Executive of Tusla, Child and Family Agency, Fred implemented the most significant reform of services since the foundation of the state including:</p>
            <p>• Securing increased investment in children and family services from €624m to €750m</p>
            <p>• Introducing Ireland’s first national model of child protection practice</p>
            <p>• Introducing Ireland’s first National Childcare Information System</p>
            <p>• Developing a programme of transformation to support the core work of Tusla</p>
            <p>• Establishing a Commissioning Strategy to ensure needs based investment in services</p>
            <p>• Securing philanthropic investment to establish evidence-based early intervention, prevention and family support programmes</p>
            <p className="p_intro">Previous experience as Director of Social Work managing services to all care groups from “cradle to grave”.</p>

            <div id="cv">
                <a href="http://www.ambcollaborative.com/FredMcBrideCV.pdf" download="FredMcBrideCV.pdf" className="btn" target="_blank">Download Fred's CV</a>
            </div>
        </div>

    </section>
  );
}

export default Resume;
