import React from 'react';
import '../pages/Home.css';
import aboutWCG from '../images/aboutWCG.png';
import physicians from '../images/physicians.png';
import varicose_veins from '../images/varicose_veins.png';

export default function Home() {
  return (
    <div className="container">
        <div className='home'>
        <div class="row">
            <div class="col-12 col-lg-6 logo">
                <h3 className='welcome'>Welcome to</h3>
                <h3 className='group'>Wilshire Cardiology Group</h3>
            </div>
            <div class="col-12 col-lg-6 intro">
                <p>A dedicated heart clinic run by a multi-disciplinary team of cardiac professionals. WCG focuses on excellence in clinical treatment on behalf of patients and thier families. We strive for the best results achievable through teamwork, vision, and the practical application of academic inquiry and research to healing heart diseases.</p>
            </div>
        </div>

        <div className="row bottomrow">
            <div className="col-12 col-lg-6">
                <div className='row'>
                    <div className='col-12 inforow'>
                        <img className='aboutWCGimgs' src={aboutWCG} alt='About WCG'/>
                    </div>
                    <div className='col-12 infotextrow'>
                        <h4>About WCG</h4>
                        <p>Wilshire Cardiology Group - Our clinic offers a comprehensive cardiology program including treatment of a full range of cardiovascular disorders and diseases such as angina, antiplatelet therapy, arrhythmia, congestive heart failure, lipid disorders, coronary artery disease... <a className='moreLink' href='/about'>More</a></p> 
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3">
                <div className='row'>
                    <div className='col-12 inforow'>
                        <img className='physiciansimg' src={physicians} alt='Physicians'/>
                    </div>
                    <div className='col-12 infotextrow'>
                        <h4>Physicians</h4>
                        <p>Dr. Steve Park, M.D completed his medical education at the University of Minnesota, internship and residency at Northwestern University.... <a className='moreLink' href='/physicians/stevep'>More</a></p> 
                    </div>
                </div>
            </div>            
            <div className="col-12 col-lg-3">
                <div className='row'>
                    <div className='col-12 inforow'>
                        <img className='veinimg' src={varicose_veins} alt='Varicose Veins'/>
                    </div>
                    <div className='col-12 infotextrow'>
                        <h4>Varicose Veins</h4>
                        <p>Varicose veins are often the cause for patient's symptoms such as heaviness, fatigue or lower body aches and after standing or sitting for long... <a className='moreLink' href='/services/treatments/varicose_vein'>More</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
