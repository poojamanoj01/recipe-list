import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
       <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4><i class="fa-solid fa-utensils"></i> Recipe-Hub</h4>
          <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi totam tempora adipisci at esse! Tempore, numquam expedita quibusdam.
          </p>
          <p>Code licensed xxx, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#landing">Landing Page</a></li>
            <li><a href="#home">Home Page</a></li>
            <li><a href="#history">Watch History Page</a></li>
            <li><a href="#guides">Guides</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Guides</h4>
          <ul>
            <li><a href="https://reactjs.org">React</a></li>
            <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a></li>
            <li><a href="https://reactrouter.com/">React Router</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <form className="contact-form">
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email"
            />
            <button type="submit" className="arrow-btn">
              <FaArrowRight />
            </button>
          </form>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 xxx, recipe-hub. Built with React.</p>
      </div>
    </footer>
  )
}

export default Footer