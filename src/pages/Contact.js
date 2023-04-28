import React from 'react'
import './Contact.css';

export default function Contact() {
  return (
    <div className="container">
        <div className='contact'>
            <h3 className='welcome-contact'>Welcome to</h3>
            <h3 className='group-contact'>Wilshire Cardiology Group</h3>
            <p className='slogan-contact'>a dedicated cardiology clinic</p>
            <p className='title-contact'>Office Hours<br/> <span className='info-contact'>Monday-Friday: 9:00 a.m. to 5:00 p.m. By appointment only.</span></p>
            <p className='title-contact'>Phone: <a className='info-contact' href='tel:+12133878000'>&#40;213&#41; 387-8000</a></p>
            {/* <p className='title-contact'>Fax: <span className='info-contact'>&#40;213&#41; 769-5004</span></p> */}
            <p className='title-contact'>Address: <span className='info-contact'>500 S. Virgil Ave. Suite 200, Los Angeles, CA 90020</span></p>
            <p className='title-contact'>E-mail address: <a className='info-contact' href='mailto:info@wilshirecardiology.com'>info@wilshirecardiology.com</a></p>
                <iframe title='googlemaps' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.1762891312933!2d-118.28892214851021!3d34.06499488050737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b882ddfccf3b%3A0xc01dd0d833f4837a!2sWilshire%20Cardiology%20Group!5e0!3m2!1sen!2sca!4v1677481949219!5m2!1sen!2sca"  frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
  )
}
