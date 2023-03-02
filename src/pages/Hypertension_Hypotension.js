import React from 'react'
import './Treatments.css';
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';

export default function HypertensionHypotension() {
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
                    <a href='/services/treatments/coronary_artery_disease'><button className='sidebar-button sidebar-items'>Coronary Artery Disease</button></a>
                    <a href='/services/treatments/hypertension_hypotension'><button className='sidebar-button sidebar-items selected'>Hypertension/Hypotension</button></a>
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
                        <div className="col-12 col-lg-12 physicianTitle">Hypertension/Hypotension</div>
                        <div className="col-12 col-lg-12">
                            <p className='treatmentP'>Whether you have been diagnosed with hypertension, also called high blood pressure, or are concerned because you have some of the risk factors for the disease, you should understand that while there is no cure, high blood pressure is manageable.</p> 
                            <p className='treatmentRedEmphises'>There are eight main ways to control your blood pressure.</p>
                            <ol style={{fontWeight:'600'}}>
                                <li>Eat a better diet, which may include reducing salt.</li>
                                <li>Enjoy regular physical activity.</li>
                                <li>Maintain a healthy weight.</li>
                                <li>Manage stress.</li>
                                <li>Avoid tobacco smoke.</li>
                                <li>Comply with medication prescriptions.</li>
                                <li>If you drink, limit alcohol.</li>
                                <li>Understand hot tub safety.</li>
                            </ol>
                            <p>Lifestyle modifications are essential. These changes may reduce one's blood pressure without the use of prescription medications. Adopting a healthy lifestyle is critical for the prevention of high blood pressure and an indispensable part of managing it. Think of the changes as a lifestyle prescription and make every effort to comply.</p>
                            <p className="treatmentRedEmphises">By adopting a heart-healthy lifestyle, you can:</p>
                            <p style={{fontWeight:'600'}}>Reduce high blood pressure<br/>Prevent or delay the development of HBP<br/>Enhance the effectiveness of blood pressure medications<br/>Lower your risk of heart attack, heart disease, stroke, and kidney disease</p>
                            <p className='treatmentRedEmphises'>Be informed.</p>
                            <p>Of all people with high blood pressure, more than 20% are unaware of their condition. This symptomless disease could leave them with substantial health consequences. Are you one? If you don't know, see a healthcare professional and be tested.</p>
                            <p className="treatmentRedEmphises">Reach your treatment goals.</p>
                            <p>There is no healthy level of high blood pressure. Don't take life-or-death chances with this disease. Instead, take responsibility! Work with your healthcare professional to determine your treatment goals and map out your best action plan for HBP prevention and management.</p>
                            <p>Take medication if prescribed for you. If your blood pressure is 140/90 or higher, your doctor will likely prescribe medication in addition to lifestyle modifications. Follow your healthcare professional's recommendations carefully, even if it means taking medication every day for the rest of your life. High blood pressure is a lifelong disease, and by partnering with your healthcare team, you can successfully reach your treatment goals and enjoy the benefits of better health.</p>
                            <p>Once a treatment program becomes routine, maintaining lower blood pressure is easier. Remind yourself that by managing blood pressure, you are lowering your risk of heart attack, heart failure, stroke, peripheral artery disease and kidney disease. Death rates from these diseases have decreased significantly, thanks in part to earlier and better treatment of HBP.</p>
                            <p>Managing blood pressure is a lifelong commitment; commit to do so today, for yourself and those you love.</p>
                            <p>Consult a doctor, consider the medical information on this site, and act on the information to live a healthier life.</p>
                            <p>Talk to your doctor about your care or any questions you have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
