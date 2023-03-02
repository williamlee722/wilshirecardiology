import React from 'react'
import './ForPatients.css';
import forPatients1 from '../images/forPatients1.png';
import about3 from '../images/about3.png';
import forPatients3 from '../images/forPatients3.png';
import pdf from '../images/pdficon.png';
import nuclearTest from '../files/NuclearTest.pdf';
import veinProcedure from '../files/Vein.pdf';
import ETT from '../files/ETT.pdf';
import cardiacCatherization from '../files/CardiacCatherization.pdf';
import holterMonitoring from '../files/HolterMonitoring.pdf';

export default function ProcedureInstructions() {
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
                    <a href="/patients/prescription"><button className='sidebar-button'>Prescription</button></a>
                    <a href="/patients/instructions"><button className='sidebar-button selected'>Procedure Instructions</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <p className="physicianTitle">Procedure Instructions</p>
                            <p className='treatmentRedEmphises'>Patient Instructions for Diagnostic Procedures</p>
                            <ol>
                                <li><a className='patientlink' href='https://www.youtube.com/watch?v=L5cIzWYkJc8' target="_blank" rel="noreferrer" >Nuclear Test &#40;MPI&#41;
                                    </a>&emsp;
                                    <a href={nuclearTest} target="_blank" rel="noreferrer"><img className='pdfimg' alt='pdf-logo' src={pdf}></img></a>&emsp;
                                    <small>&#40;Click on <a className='patientlink' href='https://www.youtube.com/watch?v=L5cIzWYkJc8' target="_blank" rel="noreferrer" ><b>"link"</b></a> to see Youtube description&#41;</small></li>
                                <li>Vein Procedure&emsp;
                                    <a href={veinProcedure} target="_blank" rel="noreferrer"><img className='pdfimg' alt='pdf-logo' src={pdf}></img></a></li>
                                <li>ETT, ETT/Echo (Exercise Treadmill Test)&emsp;
                                    <a href={ETT} target="_blank" rel="noreferrer"><img className='pdfimg' alt='pdf-logo' src={pdf}></img></a></li>
                                Please wear comfortable shoes to walk on a treadmill.
                                <li><a className='patientlink' href='https://www.youtube.com/watch?v=L5cIzWYkJc8' target="_blank" rel="noreferrer" >Ultrasounds</a> (Echo, Carotid Duplex, Venus Duplex)&ensp;<small>&#40;Click on <a className='patientlink' href='https://www.youtube.com/watch?v=L5cIzWYkJc8' target="_blank" rel="noreferrer" ><b>"link"</b></a> to see Youtube description&#41;</small></li>
                                There is no preparation or follow-up precautions required for ultrasound procedures.
                                <li>Abdominal Aortic Aneurism (AAA)</li>
                                There is no preparation or follow-up precautions required for AAA.
                                <li>Vestibular Autorotation Test (VAT)</li>
                                There is no preparation or follow-up precautions required for VAT.
                                <li>Holter Monitoring&emsp;
                                    <a href={holterMonitoring} target="_blank" rel="noreferrer"><img className='pdfimg' alt='pdf-logo' src={pdf}></img></a></li>
                                Patients cannot sleep on stomach. No showers. No strenuous exercise to avoid sweating.
                                PLEASE DO NOT REMOVE THE BATTERY FROM HOLTER.
                                <li>Cardiac Catherization&emsp;
                                    <a href={cardiacCatherization} target="_blank" rel="noreferrer"><img className='pdfimg' alt='pdf-logo' src={pdf}></img></a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
