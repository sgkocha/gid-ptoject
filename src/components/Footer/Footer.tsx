import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-action d-f">
        <div className="footer-action-img"><img src="images/triangle.png" alt="triangle" /></div>
        <button className="footer-action-btn">Up</button>
      </div>
      <div className="footer-caption d-f jc-sb align-center">
        <div className="footer-logo"><img src="images/logo.svg" alt="logo" /></div>
        <div className="footer-social d-f">
          <div><img src="images/social1.png" alt="social1" /></div>
          <div><img src="images/social2.png" alt="social2" /></div>
          <div><img src="images/social3.png" alt="social3" /></div>
          <div><img src="images/social4.png" alt="social4" /></div>
          <div><img src="images/social5.png" alt="social5" /></div>
          <div><img src="images/social6.png" alt="social6" /></div>
        </div>
      </div>
      <div className="footer-bar d-f">
        <div className="footer-bar-item">
          <div className="footer-bar-title">Company gid</div>
          <ul className="footer-bar-list">
            <li className="bar-list-item"><a href="">About us</a></li>
            <li className="bar-list-item"><Link to='team'>Our team</Link></li>
            <li className="bar-list-item"><a href="">History</a></li>
            <li className="bar-list-item"><Link to='blog'>Our Blog</Link></li>
          </ul>
        </div>
        <div className="footer-bar-item">
          <div className="footer-bar-title">Projects</div>
          <ul className="footer-bar-list">
            <li className="bar-list-item"><Link to='project'>Apartments</Link></li>
            <li className="bar-list-item"><a href="">Cottages</a></li>
            <li className="bar-list-item"><a href="">Offices</a></li>
            <li className="bar-list-item"><a href="">Restaurants</a></li>
          </ul>
        </div>
        <div className="footer-bar-item">
          <div className="footer-bar-title">Services</div>
          <ul className="footer-bar-list">
            <li className="bar-list-item"><a href="">Apartments</a></li>
            <li className="bar-list-item"><a href="">Cottages</a></li>
            <li className="bar-list-item"><a href="">Offices</a></li>
            <li className="bar-list-item"><a href="">Restaurants</a></li>
          </ul>
        </div>
        <div className="footer-bar-item">
          <div className="footer-bar-title">Contacts</div>
          <ul className="footer-bar-list">
            <li className="bar-list-item">+(7495) 555-15-05</li>
            <li className="bar-list-item">info@gid.pro</li>         
          </ul>
        </div>
      </div>
      <div className="footer-rights">Gid.group 2021/ All rights reserved</div>
    </footer>
  )
}

export default Footer