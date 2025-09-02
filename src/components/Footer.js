import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          {/* <img src="assets/icons/logo.png" alt=""></img> */}
          <h2>altiedge</h2>
        </div>
        <div className="footer-nav">
          <div className="footer-nav-section">
            <div className="footer-heading">Quick Menu</div>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Readiness Test</Link></li>
              <li><Link href="#">Program & Events</Link></li>
              <li><Link href="#">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-nav-section">
            <div className="footer-heading">connect with us</div>
            <ul>
              <li><Link href="#">What's App</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">Linked In</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-background">
          altiedge
      </p>
    </footer>
  )
}
