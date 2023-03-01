import React from 'react'
import './Physicians.css';
import steve1 from '../images/steve1.jpg';
import about2 from '../images/about2.png';
import steve3 from '../images/steve2.jpg';
import Steve_park from '../images/Steve_Park.jpg';

export default function Steve_Park() {
  return (
    <div className="container">
        <div className='physicians'>
            <div className="row">
            <div className="col-3 col-lg-3 inforow aboutimg">
                    <img className='steve1' src={steve1} alt='about1'/>
                </div>
                <div className="col-12 col-lg-6 inforow">
                    <img className='about2' src={about2} alt='about2'/>
                </div>            
                <div className="col-4 col-lg-3 inforow aboutimg">
                    <img className='steve3' src={steve3} alt='about3'/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 col-lg-3 aboutHeader physicians-sidebar">
                    <h5>Doctors/Physicians</h5>
                    <a href='/wilshirecardiology/#/physicians/stevep'><button className='sidebar-button selected'>Cardiologist</button></a>
                    <a href='/wilshirecardiology/#/physicians/doheek'><button className='sidebar-button'>Nuclear Physician</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12 physicianTitle">Steve S. Park, M.D. ,Interventional Cardiologist</div>
                        <div className="col-12 col-lg-4 photorow">
                            <img src={Steve_park} width={300}></img>
                        </div>
                        <div className="col-12 col-lg-8 aboutP">
                            <p>Dr. Steve Park, M.D completed his medical education at the University of Minnesota, internship and residency at Northwestern University, fellowship at St. Vincent's Medical Center and Loma Linda University Medical Center. He started as a member of the teaching staff at White Memorial Heart Institute. After winning a teaching award, in 1995 he began practicing interventional cardiology in Koreantown.</p>
                            <p>Dr. Steve's research papers include: Use of Dipyridamole in assessing the presence and severity of myocardial ischemia, a double-blind, randomized, placebo-controlled assessment of SOULUTROBAN in prevention of restenosis following coronary angioplasty; Total ischemia awareness program; and Acute M.I. Study: Eminase vs. TPA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
