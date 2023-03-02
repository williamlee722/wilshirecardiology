import React from 'react'
import './Sitemap.css';

export default function Sitemap() {
  return (
    <div className="container">
        <div className='contact'>
          <h3 className='welcome-contact'>Welcome to</h3>
          <h3 className='group-contact'>Wilshire Cardiology Group</h3>
          <p className='slogan-sitemap'>Sitemap</p>
          <div className='row'>
            <div className="col-12 col-lg-3 grid-sitemap">
              <p><a className='title-sitemap' href="/">Home</a></p>
              <p><a className='title-sitemap' href="/about">About WCG</a></p>
              <p><a className='title-sitemap' href="/contact">Contact Us</a></p>
              <span className='title-sitemap'>Physicians</span>
              <ul>
                <li><a className='info-sitemap' href="/physicians/stevep">Steve Park, MD</a></li>
                <li><a className='info-sitemap' href="/physicians/doheek">Dohee Kim, MD</a></li>
              </ul>
            </div>
            <div className="col-12 col-lg-3 grid-sitemap">
              <span className='title-sitemap'>Treatments</span>
              <ul>
              <li><a className='info-sitemap' href="/services/treatments/angina">Angina</a></li>
              <li><a className='info-sitemap' href="/services/treatments/antiplatelet">Antiplatelet Therapy</a></li>
              <li><a className='info-sitemap' href="/services/treatments/arrhythmia">Arrhythmia</a></li>
              <li><a className='info-sitemap' href="/services/treatments/congestive_heart_failure">Congestive Heart Failure &#40;CHF&#41;</a></li>
              <li><a className='info-sitemap' href="/services/treatments/coronary_artery_disease">Coronary Artery Disease &#40;CAD&#41;</a></li>
              <li><a className='info-sitemap' href="/services/treatments/hypertension_hypotension">Hypertension/Hypotension</a></li>
              <li><a className='info-sitemap' href="/services/treatments/hypercholesterolemia">Hypercholesterolemia</a></li>
              <li><a className='info-sitemap' href="/services/treatments/syncope">Syncope</a></li>
              <li><a className='info-sitemap' href="/services/treatments/varicose_vein">Varicose Vein</a></li>
              </ul>
            </div>
            <div className="col-12 col-lg-3 grid-sitemap">
              <span className='title-sitemap'>Tests</span>
              <ul>
              <li><a className='info-sitemap' href="/services/tests/cardiac_catherization_angiogram">Cardiac Catherization Angiogram</a></li>
              <li><a className='info-sitemap' href="/services/tests/cardiac_evaluation">Cardiac Evaluation</a></li>
              <li><a className='info-sitemap' href="/services/tests/carotid_duplex_scan">Carotid Duplex Scan</a></li>
              <li><a className='info-sitemap' href="/services/tests/echocardiogram">Echocardiogram</a></li>
              <li><a className='info-sitemap' href="/services/tests/electrocardiogram">Electrocardiogram &#40;ECG or EKG&#41;</a></li>
              <li><a className='info-sitemap' href="/services/tests/exercise_treadmill_test">Exercise Treadmill Test &#40;ETT&#41;</a></li>
              <li><a className='info-sitemap' href="/services/tests/holter_monitor_study">Holter Monitor Study</a></li>
              <li><a className='info-sitemap' href="/services/tests/nuclear_stress_test">Nuclear Stress Test/Myocardial Perfusion Imaging &#40;MPI&#41;</a></li>
              <li><a className='info-sitemap' href="/services/tests/stent">Stent</a></li>
              </ul>
            </div>
            <div className="col-12 col-lg-3 grid-sitemap">
              <span className='title-sitemap'>For Patients</span>
              <ul>
                <li><a className='info-sitemap' href="/patients/new">New Patients</a></li>
                <li><a className='info-sitemap' href="/patients/hmo">HMO Patients</a></li>
                <li><a className='info-sitemap' href="/patients/contracted_plans">Contracted Insurance Plans</a></li>
                <li><a className='info-sitemap' href="/patients/prescription">How to Get a Prescription</a></li>
                <li><a className='info-sitemap' href="/patients/instructions">Procedure Instructions</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
