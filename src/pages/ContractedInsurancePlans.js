import React from 'react'
import './ForPatients.css';
import forPatients1 from '../images/forPatients1.png';
import about3 from '../images/about3.png';
import forPatients3 from '../images/forPatients3.png';

export default function ContractedInsurancePlans() {
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
                    <a href="/patients/contracted_plans"><button className='sidebar-button selected'>Contracted Insurance Plans</button></a>
                    <a href="/patients/prescription"><button className='sidebar-button'>Prescription</button></a>
                    <a href="/patients/instructions"><button className='sidebar-button'>Procedure Instructions</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <p className="physicianTitle">Contracted Insurance Plans</p>
                            <p className='treatmentBlueEmphises'>Medicare</p>
                            <p className='treatmentBlueEmphises'>HMO:</p>
                            <ul>
                                <li>Korean American Medical Group</li>
                                <li>Seoul Medical Group</li>
                                <li>Caremore IPA</li>
                                <li>Good Samaritan IPA</li>
                                <li>St. Vincent IPA</li>
                                <li>Center IPA</li>
                                <li>Advantage Care IPA</li>
                                <li>NXT IPA</li>
                            </ul>
                            <p className='treatmentBlueEmphises'>PPO:</p>
                            <ul>
                                <li>Aetna</li>
                                <li>Amerigroup</li>
                                <li>Binder $ Binder</li>
                                <li>Blue Cross</li>
                                <li>Blue Shield</li>
                                <li>Boon-Chapman</li>
                                <li>Cigna</li>
                                <li>DB Insurance &#40;동부 여행자 보험&#41;</li>
                                <li>EBA&M</li>
                                <li>GEHA</li>
                                <li>Health Net</li>
                                <li>Humana</li>
                                <li>Multiplan</li>
                                <li>Motion Pictures Industry</li>
                                <li>Nippon</li>
                                <li>Southern California Drug Benefit Fund</li>
                                <li>Tricare</li>
                                <li>United Healthcare </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
