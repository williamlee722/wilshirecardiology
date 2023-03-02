import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
  <footer className='footer'>
        <ul>
          <div className='infolg'>
            <li className='info'>Mon-Fri 9 to 5 by appointment only</li>
          </div>
          <div className='infolgn'>
            <li>|</li>
          </div>
          <li><a className='info' href='tel:+12133878000'>&#40;213&#41; 387-8000</a></li>
          <div className='infomdn'>
            <li>|</li>
          </div>
          <div className='infomd'>
            <li><a className='info' href='mailto:info@wilshirecardiology.com'>info@wilshirecardiology.com</a></li>
            <li>|</li>
            <li><a className='info' href='https://goo.gl/maps/TBGL2epcSmHcntdLA' target="_blank" rel="noreferrer">500 S. Virgil Ave. Suite 200, Los Angeles, CA 90020</a></li>
          </div>
        </ul>
    <p className='copyright'>&copy; Copyright 2023 Wilshire Cardiology Group</p>
  </footer>
  )
}
