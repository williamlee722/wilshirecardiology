import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo from '../images/navbar-logo.png';

export default function NavBar() {
  return (
    <div className='sticky-nav'>
    <Navbar className='color-nav' expand="lg">
      <Container>
        <Navbar.Brand href="/"><img className='nav-logo' alt="wilshire-logo" src={navlogo} width='200'/></Navbar.Brand>
        <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="m-auto">
            <Nav.Link className='nav-item' href="/">Home</Nav.Link>
            <Nav.Link className='nav-item' href="/about">About WCG</Nav.Link>
            <NavDropdown className='dropdown-toggle physician-toggle' title="Physicians" id="basic-nav-dropdown">
                <NavDropdown.Item href="/physicians/stevep">Steve Park, MD</NavDropdown.Item>
                <NavDropdown.Item href="/physicians/doheek">Dohee Kim, MD</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='dropdown-toggle service-toggle' title="Services" id="basic-nav-dropdown">
                <NavDropdown.Header>Treatments</NavDropdown.Header>
                <NavDropdown.Item href="/services/treatments/angina">Angina</NavDropdown.Item>
                <NavDropdown.Item href="/services/treatments/antiplatelet">Antiplatelet Therapy</NavDropdown.Item>
                <NavDropdown.Item href="/services/treatments/arrhythmia">Arrhythmia</NavDropdown.Item>
                <NavDropdown.Item href="/services/treatments/congestive_heart_failure">Congestive Heart Failure</NavDropdown.Item>
                <NavDropdown.Item href="/services/treatments/coronary_artery_disease">Coronary Artery Disease</NavDropdown.Item>
                <NavDropdown.Item href="/services/treatments/hypertension_hypotension">Hypertension/Hypotension</NavDropdown.Item>
                <NavDropdown.Item href="/services/treatments/hypercholesterolemia">Hypercholesterolemia</NavDropdown.Item>
                <NavDropdown.Item href="/services/treatments/syncope">Syncope</NavDropdown.Item>
                <NavDropdown.Item href="/services/treatments/varicose_vein">Varicose Vein</NavDropdown.Item>
                <NavDropdown.Header>Tests</NavDropdown.Header>
                <NavDropdown.Item href="/services/tests/cardiac_catherization_angiogram">Cardiac Catherization/Angiogram</NavDropdown.Item>
                <NavDropdown.Item href="/services/tests/cardiac_evaluation">Cardiac Evaluation</NavDropdown.Item>
                <NavDropdown.Item href="https://www.youtube.com/watch?v=L5cIzWYkJc8" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" color='red' width="25" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 1.5 16 15">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>&ensp;Carotid Duplex Scan</NavDropdown.Item>
                <NavDropdown.Item href="/services/tests/echocardiogram">Echocardiogram</NavDropdown.Item>
                <NavDropdown.Item href="/services/tests/electrocardiogram">Electrocardiogram &#40;EKG&#41;</NavDropdown.Item>
                <NavDropdown.Item href="/services/tests/exercise_treadmill_test">Exercise Treadmill Test &#40;ETT/Stress Test&#41;</NavDropdown.Item>
                <NavDropdown.Item href="/services/tests/holter_monitor_study">Holter Monitor Study</NavDropdown.Item>
                <NavDropdown.Item href="https://www.youtube.com/watch?v=gfeRQDkPFko" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" color='red' width="25" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 1.5 16 15">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>&ensp;Nuclear Stress Test</NavDropdown.Item>
                <NavDropdown.Item href="/services/tests/stent">Stent</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='dropdown-toggle' title="For Patients" id="basic-nav-dropdown">
                <NavDropdown.Item href="/patients/new">New Patients</NavDropdown.Item>
                <NavDropdown.Item href="/patients/hmo">HMO Patients</NavDropdown.Item>
                <NavDropdown.Item href="/patients/contracted_plans">Contracted Insurance Plans</NavDropdown.Item>
                <NavDropdown.Item href="/patients/prescription">Prescription</NavDropdown.Item>
                <NavDropdown.Item href="/patients/instructions">Procedure Instructions</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav-item' href="/contact">Contact Us</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link className='nav-item' href="/sitemap">Sitemap</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
