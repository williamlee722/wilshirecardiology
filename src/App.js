import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Steve_Park from './pages/Steve_Park';
import Dohee_Kim from './pages/Dohee_Kim';
import Angina from './pages/Angina';
import Footer from './pages/Footer';
import AntiplateletTherapy from './pages/AntiplateletTherapy';
import Arrhythmia from './pages/Arrhythmia';
import CongestiveHeartFailure from './pages/CongestiveHeartFailure';
import CoronaryArteryDisease from './pages/CoronaryArteryDisease';
import Hypertension_Hypotension from './pages/Hypertension_Hypotension';
import Hypercholesterolemia from './pages/Hypercholesterolemia';
import Syncope from './pages/Syncope';
import VaricoseVein from './pages/VaricoseVein';
import CardiacCatherizationAngiogram from './pages/CardiacCatherizationAngiogram';
import CardiacEvaluation from './pages/CardiacEvaluation';
import Echocardiogram from './pages/Echocardiogram ';
import EKG from './pages/EKG';
import ETT from './pages/ETT';
import HMS from './pages/HMS';
import Stent from './pages/Stent';
import NewPatients from './pages/NewPatients';
import HMOPatients from './pages/HMOPatients';
import ContractedInsurancePlans from './pages/ContractedInsurancePlans';
import Prescription from './pages/Prescription';
import ProcedureInstructions from './pages/ProcedureInstructions';
import ContactUs from './pages/Contact';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <div className='appContainer'>
      <div className='appWrap'>
      <HashRouter>          
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/physicians/stevep' element={<Steve_Park/>} />
          <Route path='/physicians/doheek' element={<Dohee_Kim/>} />
          <Route path='/services/treatments/angina' element={<Angina/>} />
          <Route path='/services/treatments/antiplatelet' element={<AntiplateletTherapy/>} />
          <Route path='/services/treatments/arrhythmia' element={<Arrhythmia/>}/>
          <Route path='/services/treatments/congestive_heart_failure' element={<CongestiveHeartFailure/>}/>
          <Route path='/services/treatments/coronary_artery_disease' element={<CoronaryArteryDisease/>}/>
          <Route path='/services/treatments/hypertension_hypotension' element={<Hypertension_Hypotension/>}/>
          <Route path='/services/treatments/hypercholesterolemia' element={<Hypercholesterolemia/>}/>
          <Route path='/services/treatments/syncope' element={<Syncope/>}/>
          <Route path='/services/treatments/varicose_vein' element={<VaricoseVein/>}/>
          <Route path='/services/tests/cardiac_catherization_angiogram' element={<CardiacCatherizationAngiogram/>}/>
          <Route path='/services/tests/cardiac_evaluation' element={<CardiacEvaluation/>}/>
          <Route path='/services/tests/echocardiogram' element={<Echocardiogram/>}/>
          <Route path='/services/tests/electrocardiogram' element={<EKG/>}/>
          <Route path='/services/tests/exercise_treadmill_test' element={<ETT/>}/>
          <Route path='/services/tests/holter_monitor_study' element={<HMS/>}/>
          <Route path='/services/tests/stent' element={<Stent/>}/>
          <Route path="/patients/new" element={<NewPatients/>}/>
          <Route path="/patients/hmo" element={<HMOPatients/>}/>
          <Route path="/patients/contracted_plans" element={<ContractedInsurancePlans/>}/>
          <Route path="/patients/prescription" element={<Prescription/>}/>
          <Route path="/patients/instructions" element={<ProcedureInstructions/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/sitemap" element={<Sitemap/>}/>
        </Routes>
        </HashRouter>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
