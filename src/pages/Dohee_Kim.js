import React from 'react'
import './Physicians.css';
import dohee1 from '../images/dohee1.jpg';
import about2 from '../images/about2.png';
import dohee3 from '../images/dohee2.jpg';
import DoheeKim from '../images/Dohee_kim.jpg';

export default function Dohee_Kim() {
  return (
    <div className="container">
        <div className='physicians'>
            <div className="row">
            <div className="col-3 col-lg-3 inforow aboutimg">
                    <img className='dohee1' src={dohee1} alt='about1'/>
                </div>
                <div className="col-12 col-lg-6 inforow">
                    <img className='about2' src={about2} alt='about2'/>
                </div>            
                <div className="col-4 col-lg-3 inforow aboutimg">
                    <img className='dohee3' src={dohee3} alt='about3'/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 col-lg-3 aboutHeader physicians-sidebar">
                    <h5>Doctors/Physicians</h5>
                    <a href='/wilshirecardiology/#/physicians/stevep'><button className='sidebar-button'>Cardiologist</button></a>
                    <a href='/wilshirecardiology/#/physicians/doheek'><button className='sidebar-button selected'>Nuclear Physician</button></a>
                </div>
                <div className="col-12 col-lg-9 portfolio">
                    <div className="row">
                        <div className="col-12 col-lg-12 physicianTitle">Do Hee Kim, M.D. ,Specialist in Clinical and Laboratory Nuclear Medicine</div>
                        <div className="col-12 col-lg-4 photorow">
                            <img src={DoheeKim} width={300}></img>
                        </div>
                        <div className="col-12 col-lg-8 aboutP">
                            <p>Dr. Kim is certified by the American Board of Nuclear Medicine &#40;ABNM&#41; to practice as a specialist in all aspects of clinical and laboratory nuclear medicine. Having completed her medical school education at Universidad de Buenos Aires in Argentina, Dr. Kim went on to complete residency in preliminary internal medicine at University of Southern California, Los Angeles County Hospital. After her residency at USC, she received clinical training in Nuclear Medicine at UCLA Ronald Reagan Medical Center.</p>
                            <p>Dr. Kim's early medical experience includes field studies of family exercise regimens and perceived value of exercise in a Buenos Aires community Hospital patient population to determine their knowledge base of the importance of exercise to health. Her publishing interests range from use of SPECT vs STECT/CT in the evaulation of parathyroid adenomas to the effects of chemotherapy in the brain metabolism of F18-FDG in patients with head and neck cancers. Dr. Kim co-authored a study on the clinical impact of intravenous contrast enhanced diagnostic CT scan in patients with neoplastic disease in comparison with PET/CT imaging, which appeared in the Journal of Nuclear Medicine, 2006.</p>
                            <p>Dr. Kim is fluent in English, Korean and Spanish.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
