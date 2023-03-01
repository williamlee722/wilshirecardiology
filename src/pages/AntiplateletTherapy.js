import React from 'react'
import './Treatments.css';
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';

export default function AntiplateletTherapy() {
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
                    <a href='/wilshirecardiology/#/services/treatments/angina'><button className='sidebar-button sidebar-items'>Angina</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/antiplatelet'><button className='sidebar-button sidebar-items selected'>Antiplatelet Therapy</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/arrhythmia'><button className='sidebar-button sidebar-items'>Arrhythmia</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/congestive_heart_failure'><button className='sidebar-button sidebar-items'>Congestive Heart Failure</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/coronary_artery_disease'><button className='sidebar-button sidebar-items'>Coronary Artery Disease</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/hypertension_hypotension'><button className='sidebar-button sidebar-items'>Hypertension/Hypotension</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/hypercholesterolemia'><button className='sidebar-button sidebar-items'>Hypercholesterolemia</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/syncope'><button className='sidebar-button sidebar-items'>Syncope</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/varicose_vein'><button className='sidebar-button sidebar-items'>Varicose Vein</button></a>
                    <div className='sidebar-button sidebar-title'>Tests</div>
                    <a href='/wilshirecardiology/#/services/tests/cardiac_catherization_angiogram'><button className='sidebar-button sidebar-items'>Cardiac Catherization/Angiogram</button></a>
                    <a href='/wilshirecardiology/#/services/tests/cardiac_evaluation'><button className='sidebar-button sidebar-items'>Cardiac Evaluation</button></a>
                    <a href='https://www.youtube.com/watch?v=L5cIzWYkJc8' target="_blank"><button className='sidebar-button sidebar-items'><svg xmlns="http://www.w3.org/2000/svg" color='red' width="25" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 1.5 16 15">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>&ensp;Carotid Duplex Scan</button></a>
                    <a href='/wilshirecardiology/#/services/tests/echocardiogram'><button className='sidebar-button sidebar-items'>Echocardiogram</button></a>
                    <a href='/wilshirecardiology/#/services/tests/electrocardiogram'><button className='sidebar-button sidebar-items'>Electrocardiogram (EKG)</button></a>
                    <a href='/wilshirecardiology/#/services/tests/exercise_treadmill_test'><button className='sidebar-button sidebar-items'>Exercise Treadmill Test (ETT/Stress Test)</button></a>
                    <a href='/wilshirecardiology/#/services/tests/holter_monitor_study'><button className='sidebar-button sidebar-items'>Holter Monitor Study</button></a>
                    <a href='https://www.youtube.com/watch?v=gfeRQDkPFko' target="_blank"><button className='sidebar-button sidebar-items'><svg xmlns="http://www.w3.org/2000/svg" color='red' width="25" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 1.5 16 15">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>&ensp;Nuclear Stress Test</button></a>
                    <a href='/wilshirecardiology/#/services/tests/stent'><button className='sidebar-button sidebar-items last'>Stent</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12 physicianTitle">Antiplatelet Therapy</div>
                        <div className="col-12 col-lg-12">
                            <p className='treatmentP'>Antiplatelets are a group of medicines that stop blood cells (called platelets) from sticking to each other and forming a blood clot.</p>
                            <p>Whenever there is an injury to the body, platelets are sent to the site of the injury, where they clump together to form a blood blot. This stops the bleeding. If you have a cut or a wound, this is a good thing. But, sometimes, platelets will clump together inside a blood vessel that is injured, swollen (inflamed), or that has plaque build-up (atherosclerosis). When this happens, the platelets can cause a blood clot to form inside the vessel. Platelets can also cause blood clots to form aroudn stents, artificial heart valves, and other devices that are placed inside the heart or blood vessels. Antiplatelet medicines can stop blood clots from forming.</p>
                            <p className='treatmentRedEmphises'>Patients are usually given antiplatelets if they have a history of:</p>
                            <ul>
                                <li>Coronary artery disease (CAD)</li>
                                <li>Heart Attack</li>
                                <li>Angina</li>
                                <li>Stroke or transient ischemic attacks (TIAs)</li>
                                <li>Peripheral vascular disease (PVD)</li>
                            </ul>
                            <p>Antiplatelets may also be given to patients during and after angioplasty, stent procedures, and after coronary artery bypass surgery. SOme patients with atrial fibrillation, valve disease, or Peripheral vascular disease (PVD) also take antiplatelets.</p>
                            <p>While taking antiplatelets, avoid smoking and drinking alcohol. Also, tell your doctor or entist that you are taking antiplatelet medicines before any surgical or dental procedure. Because antiplatelets reduce the blood's ability to clot, taking them before surgical or dental prcedures can lead to excess bleeding. You might need to stop taking medicine for 5 to 7 days before dental work or surgery; however, do not stop taking this medicine without consulting a doctor first.</p>
                            <p>Talk with your doctor about your medical history before beginning antiplatelet therapy. The risks or taking the medine should be weighted against its benefits. Consider the following factors when deciding whether you should begin antiplatelet therapy:</p>
                            <ul style={{fontWeight: "bold"}}>
                                <li>Allergies to antiplatelet medicines, ibuprofen, or naproxen</li>
                                <li>Considering becoming pregnant, you are pregnant, or you are breast-feeding your baby</li>
                            </ul>
                            <p className='treatmentRedEmphises'>Rare side effects:</p>
                            <ul>
                                <li>Allergic reaction, with swelling of the face, throat, tongue, lips, hands, feet or ankles</li>
                                <li>Skin rash, itching, or hives</li>
                                <li>Throwing up, especially if vomit contains blood or looks like coffee grounds</li>
                                <li>Dark or bloody stools, blood in the urine</li>
                                <li>Trouble breathing, swallowing</li>
                                <li>Trouble speaking slowed speech</li>
                                <li>Unsual bleeding or bruising</li>
                                <li>Fever, chills sore throat</li>
                                <li>Fast heartbeat</li>
                                <li>Yellowing of skin or eyes (jaundice)</li>
                                <li>Joint pain</li>
                                <li>Weakness, numbness of arm or leg</li>
                                <li>Confusion, hallucinations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
