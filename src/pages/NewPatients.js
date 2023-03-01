import React from 'react'
import './ForPatients.css';
import forPatients1 from '../images/forPatients1.png';
import about3 from '../images/about3.png';
import forPatients3 from '../images/forPatients3.png';

export default function NewPatients() {
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
                    <a href="/wilshirecardiology/#/patients/new"><button className='sidebar-button selected'>New Patients</button></a>
                    <a href="/wilshirecardiology/#/patients/hmo"><button className='sidebar-button'>HMO Patients</button></a>
                    <a href="/wilshirecardiology/#/patients/contracted_plans"><button className='sidebar-button'>Contracted Insurance Plans</button></a>
                    <a href="/wilshirecardiology/#/patients/prescription"><button className='sidebar-button'>Prescription</button></a>
                    <a href="/wilshirecardiology/#/patients/instructions"><button className='sidebar-button'>Procedure Instructions</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <p className="physicianTitle">New Patients</p>
                            <p className='treatmentRedEmphises'>1. Making an Appointment</p>
                            <p>To schedule an appointment, please call 213-387-8000.</p>
                            <p>We have English, Korean, Spanish, and Mandarin speaking staff available. Please expect for the first visit to take about 2 hours.</p>
                            <p className='treatmentRedEmphises'>2. What to Bring</p>
                            <ul>
                                <li>Driver's License or Photo ID</li>
                                <li>Current Insurance Card</li>
                                <li>Current Medication List or All Prescribed Bottles</li>
                                <li>Recent Lab Work/Diagnostic Procedures (if appropriate)</li>
                                <li>Recent Hospitalization Records (if appropriate)</li>
                                <li>FOR HMO PATIENTS: PLEASE BRING YOUR AUTHORIZATION GIVEN BY PRIMARY CARE PROVIDER</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
