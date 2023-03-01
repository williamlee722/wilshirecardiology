import React from 'react'
import './Treatments.css';
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';


export default function CardiacEvaluation() {
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
                    <a href='/wilshirecardiology/#/services/treatments/antiplatelet'><button className='sidebar-button sidebar-items'>Antiplatelet Therapy</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/arrhythmia'><button className='sidebar-button sidebar-items'>Arrhythmia</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/congestive_heart_failure'><button className='sidebar-button sidebar-items'>Congestive Heart Failure</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/coronary_artery_disease'><button className='sidebar-button sidebar-items'>Coronary Artery Disease</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/hypertension_hypotension'><button className='sidebar-button sidebar-items'>Hypertension/Hypotension</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/hypercholesterolemia'><button className='sidebar-button sidebar-items'>Hypercholesterolemia</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/syncope'><button className='sidebar-button sidebar-items'>Syncope</button></a>
                    <a href='/wilshirecardiology/#/services/treatments/varicose_vein'><button className='sidebar-button sidebar-items'>Varicose Vein</button></a>
                    <div className='sidebar-button sidebar-title'>Tests</div>
                    <a href='/wilshirecardiology/#/services/tests/cardiac_catherization_angiogram'><button className='sidebar-button sidebar-items'>Cardiac Catherization/Angiogram</button></a>
                    <a href='/wilshirecardiology/#/services/tests/cardiac_evaluation'><button className='sidebar-button sidebar-items selected'>Cardiac Evaluation</button></a>
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
                        <div className="col-12 col-lg-12 physicianTitle">Cardiac Evaluation</div>
                        <div className="col-12 col-lg-12">
                            <p className='treatmentP'>The initial cardiac evaluation consists of performing a physical examination and obtaining a medical history. During physical examination, the physician looks for an underlying cause for symptoms that have presented (chest pain, shortness of breath) and assesses heart function. A stethoscope is used to detect abnormal heart murmurs that may indicate a leaky or narrowed valve, and to detect fluid in the lungs. The physician will feel the thyroid gland in the neck to see if it is enlarged or nodular and will listen over the neck, abdomen, and groin area for sounds created by turbulent blood flow through diseased or blocked arteries.</p>
                            <p>The physician also looks for enlarged (distended) veins in the neck and for swelling (edema) in the legs (particularly the ankles and feet) and/or the abdomen; checks the blood pressure in both arms (rare conditions produce different blood pressures in each arm); and may also look at the back of the eyes with an ophthalmoscope, to examine the small blood vessels there for signs of damage (e.g., from chronic high blood pressure).</p>
                            <p>Obtaining a medical history requires the doctor to ask the patient if there is a history of heart problems (such as heart attack) or chest pains (which might suggest coronary artery disease); if the patient has suddenly developed a sensation of shortness of breath and chest pains (which can suggest that a blood clot has broken off from a blood vessel in the legs and traveled to the lungs); if the patient is losing weight or feels hot all the time (symptoms of an overactive thyroid gland); and if the patient regularly consumes alcohol.</p>
                            <p>When performing an evaluation, it's important for a physician to also know what medications are being taken (prescription drugs and over-the-counter medicines); if the patient has experienced symptoms such as sweating, palpitations, headaches, or dizziness; and if there are other medical conditions.</p>
                            <p>Laboratory tests can help the physician identify underlying ischemic heart disease and conditions that may contribute to its development, which is the case with, for example, diabetes mellitus or renal disease. Both are associated with atherosclerosis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}