import React from 'react'
import './Treatments.css';
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';

export default function CoronaryArteryDisease() {
  return (
    <div className="container">
        <div className='services'>
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
                <div className="col-3 col-lg-3 aboutHeader physicians-sidebar">
                <h5>Services</h5>
                    <div className='sidebar-button sidebar-title'>Treatments</div>
                    <a href='/services/treatments/angina'><button className='sidebar-button sidebar-items'>Angina</button></a>
                    <a href='/services/treatments/antiplatelet'><button className='sidebar-button sidebar-items'>Antiplatelet Therapy</button></a>
                    <a href='/services/treatments/arrhythmia'><button className='sidebar-button sidebar-items'>Arrhythmia</button></a>
                    <a href='/services/treatments/congestive_heart_failure'><button className='sidebar-button sidebar-items'>Congestive Heart Failure</button></a>
                    <a href='/services/treatments/coronary_artery_disease'><button className='sidebar-button sidebar-items selected'>Coronary Artery Disease</button></a>
                    <a href='/services/treatments/hypertension_hypotension'><button className='sidebar-button sidebar-items'>Hypertension/Hypotension</button></a>
                    <a href='/services/treatments/hypercholesterolemia'><button className='sidebar-button sidebar-items'>Hypercholesterolemia</button></a>
                    <a href='/services/treatments/syncope'><button className='sidebar-button sidebar-items'>Syncope</button></a>
                    <a href='/services/treatments/varicose_vein'><button className='sidebar-button sidebar-items'>Varicose Vein</button></a>
                    <div className='sidebar-button sidebar-title'>Tests</div>
                    <a href='/services/tests/cardiac_catherization_angiogram'><button className='sidebar-button sidebar-items'>Cardiac Catherization/Angiogram</button></a>
                    <a href='/services/tests/cardiac_evaluation'><button className='sidebar-button sidebar-items'>Cardiac Evaluation</button></a>
                    <a href='https://www.youtube.com/watch?v=L5cIzWYkJc8' target="_blank" rel="noreferrer"><button className='sidebar-button sidebar-items'><svg xmlns="http://www.w3.org/2000/svg" color='red' width="25" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 1.5 16 15">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>&ensp;Carotid Duplex Scan</button></a>
                    <a href='/services/tests/echocardiogram'><button className='sidebar-button sidebar-items'>Echocardiogram</button></a>
                    <a href='/services/tests/electrocardiogram'><button className='sidebar-button sidebar-items'>Electrocardiogram &#40;EKG&#41;</button></a>
                    <a href='/services/tests/exercise_treadmill_test'><button className='sidebar-button sidebar-items'>Exercise Treadmill Test &#40;ETT/Stress Test&#41;</button></a>
                    <a href='/services/tests/holter_monitor_study'><button className='sidebar-button sidebar-items'>Holter Monitor Study</button></a>
                    <a href='https://www.youtube.com/watch?v=gfeRQDkPFko' target="_blank" rel="noreferrer"><button className='sidebar-button sidebar-items'><svg xmlns="http://www.w3.org/2000/svg" color='red' width="25" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 1.5 16 15">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>&ensp;Nuclear Stress Test</button></a>
                    <a href='/services/tests/stent'><button className='sidebar-button sidebar-items last'>Stent</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12 physicianTitle">Coronary Artery Disease &#40;CAD&#41;</div>
                        <div className="col-12 col-lg-12">
                            <p className='treatmentP'>Also known as heart disease or atherosclerosis, it is caused by the build-up of fatty deposits, or plaque, in blood vessels of the heart. In order to work well, the heart mffffffst get oxygen and nutrients. Blood carries oxygen and nutrients to the heart through vessels called arteries. As plaque builds up in the arteries, blood flow to the heart muscle decreases. As blood flow decreases, chest pain, shortness of breath, or other signs may occur. If blood flow stops or is blocked, it causes a heart attack.</p>
                            <p className='treatmentBlueEmphises'>Signs of Coronary Artery Disease</p>
                            <p className='treatmentRedEmphises'>You might not have any signs. Or you may have:</p>
                            <ul>
                                <li>Pain or pressure in your chest, arm, jaw, shoulders, or neck; also called angina.<br/>It may spread from one area to another.</li>
                                <li>Feeling of tightness, heaviness, squeezing or burning</li>
                                <li>Sweating</li>
                                <li>Shortness of breath</li>
                                <li>Nausea, vomiting</li>
                                <li>Abdominal pain</li>
                                <li>Fatigue, dizziness, fainting</li>
                            </ul>
                            <p className='treatmentBlueEmphises'>Care</p>
                            <p className='treatmentRedEmphises'>If your doctor thinks you have coronary disease, you may seek tests such as:</p>
                            <ul>
                                <li>An electrocardiogram &#40;ECC or EKG&#41; to check the electrical activity of the heart.</li>
                                <li>A cardiac magnetic resonance imaging test &#40;MRI&#41; to photograph</li>
                                <li>A stress test to look for problems with you heart's rate, rhythm or electrical activity. Blood pressure and signs such as shortness of breath or angina are also checked.</li> 
                                <li>If tests indicate you are likely to have coronary artery disease, other tests or procedures may be done to treat the disease. The goal is to improve blood flow to </li>your heart muscle and decrease the risk of heart attack.
                            </ul>
                            <p className='treatmentRedEmphises'>Treatment may include:</p>
                            <ul>
                                <li>Medicines</li>
                                <li>Exercise</li>
                                <li>Low fat diet</li>
                                <li>Procedures or surgery</li>
                                <li>Cardiac rehabilitation program</li>
                            </ul>
                            <p>No matter what treatment is done, it does not 'cure' the disease. Individuals must reduce their specific factors and follow a care plan. </p>
                            <p>Talk to your doctor about your care or any questions you may have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
