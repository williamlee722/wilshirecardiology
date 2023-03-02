import React from 'react'
import './ForPatients.css';
import forPatients1 from '../images/forPatients1.png';
import about3 from '../images/about3.png';
import forPatients3 from '../images/forPatients3.png';

export default function HMOPatients() {
  return (
    <div className="container">
        <div className='services'>
        <div className="row">
            <div className="col-3 col-lg-3 inforow aboutimg">
                    <img className='about1' src={forPatients1} alt='forPatients1'/>
                </div>
                <div className="col-12 col-lg-5 inforow">
                    <img className='forPatients2' src={about3} alt='forPatients2'/>
                </div>            
                <div className="col-4 col-lg-4 inforow aboutimg">
                    <img className='about3' src={forPatients3} alt='forPatients3'/>
                </div>
            </div>
            <div className="row">
            <div className="col-3 col-lg-3 aboutHeader physicians-sidebar">
                    <h5>For Patients</h5>
                    <a href="/patients/new"><button className='sidebar-button'>New Patients</button></a>
                    <a href="/patients/hmo"><button className='sidebar-button selected'>HMO Patients</button></a>
                    <a href="/patients/contracted_plans"><button className='sidebar-button'>Contracted Insurance Plans</button></a>
                    <a href="/patients/prescription"><button className='sidebar-button'>Prescription</button></a>
                    <a href="/patients/instructions"><button className='sidebar-button'>Procedure Instructions</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <p className="physicianTitle">HMO Patients</p>
                            <p className='treatmentRedEmphises'>1. Authorization</p>
                            <p>For patients with HMO plans, authorization is necessary for all medical services that will be rendered at the WCG office. </p>
                            <p className='treatmentRedEmphises'>2. Processing authorization for next visit</p>
                            <p>After your first visit, our office will communicate the appropriate service codes with your primary care physician.</p>
                            <p>Please note that processing an authorization can take several business days, in some cases up to two weeks. </p>
                            <p className='treatmentRedEmphises'>3. Please refer to the <a className='forPatientsLink' href='/patients/contracted_plans'>"Insurance"</a> link for the list of accepted HMOs.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
