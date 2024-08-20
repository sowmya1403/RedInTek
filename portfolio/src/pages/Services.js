import React from 'react';
import './Services.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faBullhorn, faSearch, faFilm, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const servicesData = [
  {
    icon: faCode,
    name: 'Web Development',
    description: 'We build scalable and high-performing websites that meet your business needs.',
  },
  {
    icon: faMobileAlt,
    name: 'Mobile App Development',
    description: 'Creating intuitive and engaging mobile applications for all platforms.',
  },
  {
    icon: faBullhorn,
    name: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to enhance your online presence.',
  },
  {
    icon: faSearch,
    name: 'SEO & SMM Services',
    description: 'Optimizing your website and social media to increase visibility and engagement.',
  },
  {
    icon: faFilm,
    name: 'Media',
    description: 'Creative media solutions to capture and engage your audience.',
  },
  {
    icon: faShieldAlt,
    name: 'Cyber Security',
    description: 'Protecting your business from cyber threats with robust security measures.',
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="bulletin">
        <h2>What We Can Do For You?</h2>
      </div>
      <h1>Service We Can Help You With</h1>
      <p>
        Explore our comprehensive range of services designed to address your business needs and drive success.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} className="service-icon-img" />
            </div>
            <h3>{service.name}</h3>
            <hr />
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
