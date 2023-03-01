import React from 'react'
import './About.css';
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';

export default function About() {
  return (
    <div className="container">
        <div className='about'>
            <div className="row">
                <div className="col-3 col-lg-3 inforow aboutimg">
                    <img className='about1' src={about1} alt='about1'/>
                </div>
                <div className="col-12 col-lg-6 inforow">
                    <img className='about2' src={about2} alt='about2'/>
                </div>            
                <div className="col-4 col-lg-3 inforow aboutimg">
                    <img className='about3' src={about3} alt='about3'/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 col-lg-3 aboutHeader">
                    <h5>About WCG</h5>
                </div>
                <div className="col-12 col-lg-9 aboutrow">
                    <div className='aboutP'>
                        <p>
                        Wilshire Cardiology Group - Our clinic offers a comprehensive cardiology assessment including treatments of a full range of cardiovascular disorders and diseases such as angina, antiplatelet therapy, arrhythmia, congestive heart failure, lipid disorders, coronary artery disease, hypertension, hypercholesterolemia, and syncope. We use the latest innovations in the health care industry.</p>
                        <p>Wilshire Cardiology Group is equipped with state-of-the-art cardiac diagnostic technologies in order to provide the best medial care to the patients. The staff is regularly updated and trained in the latest developments in cardiac care. The services rendered by WCG include Cardiac Cathetherization / Angiogram, Cardiac Evaluation, Carotid Duplex Scan, Echocardiogram, Electrocardiogram (EKG), Electrophysiology Study, Exercise Treadmill Test (ETT/Stress Test), Holter Monitor Study, Event Monitor, Nuclear Stress Test, and Stent.</p>
                        <p>Our team is comprised of eminent cardiology specialists: Dr. Steve S. Park, interventional cardiologist; and Dr. Do Hee Kim, nuclear physician.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
