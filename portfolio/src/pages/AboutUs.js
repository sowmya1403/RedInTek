import React from 'react';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCode, faCogs, faShieldAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const AboutUs = () => {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>
        REDINTEK is a leading provider of technology solutions, specializing in software development and IT consulting. Our team of experts is dedicated to delivering innovative and high-quality services to help businesses achieve their goals.
      </p>
      <p>
        Our mission is to empower businesses with cutting-edge technology and exceptional service, fostering growth and success in the digital age.
      </p>

      <div className="about-us-boxes">
        <div className="about-us-box">
          <div className="box-icon">
            <FontAwesomeIcon icon={faCode} /> {/* Icon for "WHY CHOOSE US" */}
          </div>
          <h3>WHY CHOOSE US</h3>
          <p>We have professional engineers with excellent technical knowledge and skills in using the most recent software technology. We apply our knowledge to bring solutions that meet the client's needs, expectations, and budget.</p>
        </div>
        <div className="about-us-box">
          <div className="box-icon">
            <FontAwesomeIcon icon={faCogs} /> {/* Icon for "WHO WE ARE" */}
          </div>
          <h3>WHO WE ARE</h3>
          <p>As a software company, we offer services including mobile app development, web development, web designing, digital marketing, cyber security, and more. We have an excellent team that values the needs of businesses and provides the best solutions with leading technologies.</p>
        </div>
        <div className="about-us-box">
          <div className="box-icon">
            <FontAwesomeIcon icon={faShieldAlt} /> {/* Icon for "OUR VISION" */}
          </div>
          <h3>OUR VISION</h3>
          <p>Our overarching vision is to consistently deliver software services of unparalleled effectiveness, setting the highest standards in the industry, and thereby ensuring the utmost satisfaction and value for our customers.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
