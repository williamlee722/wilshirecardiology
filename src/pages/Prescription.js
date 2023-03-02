import React from 'react'
import './ForPatients.css';
import forPatients1 from '../images/forPatients1.png';
import about3 from '../images/about3.png';
import forPatients3 from '../images/forPatients3.png';

export default function Prescription() {
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
                    <a href="/patients/hmo"><button className='sidebar-button'>HMO Patients</button></a>
                    <a href="/patients/contracted_plans"><button className='sidebar-button'>Contracted Insurance Plans</button></a>
                    <a href="/patients/prescription"><button className='sidebar-button selected'>Prescription</button></a>
                    <a href="/patients/instructions"><button className='sidebar-button'>Procedure Instructions</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <p className="physicianTitle">How to Get a Prescription</p>
                            <p>Before picking up your prescription, please call the pharmacy to make sure it is ready.</p>
                            <p>If the pharmacy has not received the new prescription or refill request, please ask the PHARMACY  to CALL &#40;not fax&#41; the Wilshire Cardiology Group office for the prescription.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
