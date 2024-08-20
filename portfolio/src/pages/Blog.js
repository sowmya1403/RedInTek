import React from 'react';
import Slider from 'react-slick';
import './Blog.css'; // Import CSS for styling

// Import logo images
import logo1 from '../assets/logos/Logo1.jpg';
import logo2 from '../assets/logos/Logo2.jpg';
import logo3 from '../assets/logos/Logo3.jpg';
import logo4 from '../assets/logos/Logo4.webp';
import logo5 from '../assets/logos/Logo5.png';


// Import additional images for the partnership section
import partnershipImage1 from '../assets/blogs/partnership1.jpeg';
import partnershipImage2 from '../assets/blogs/partnership2.jpeg';

// Array of imported logos
const companyLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5
];

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="page-container">
      <h1>Blog</h1>
      <article>
        <h2>How Technology is Shaping the Future</h2>
        <p>
          Technology is evolving rapidly, impacting every aspect of our lives. From artificial intelligence to blockchain, the advancements are reshaping industries and creating new opportunities.
        </p>
        <p>
          In this post, we explore the latest trends in technology and how they are influencing the future of business and society.
        </p>
      </article>
      <article>
        <h2>The Importance of Cybersecurity in Today's World</h2>
        <p>
          As cyber threats become more sophisticated, cybersecurity has never been more critical. Organizations must implement robust security measures to protect their data and maintain trust with their customers.
        </p>
        <p>
          This blog post covers key strategies for enhancing cybersecurity and safeguarding your digital assets.
        </p>
      </article>
      
      <section className="company-logos">
        <h2>We Work With</h2>
        <Slider {...settings}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`Company ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>
      
      <section className="partnership">
        <h2>Our partnership with Microsoft gives your business a competitive advantage</h2>
        <div className="partnership-images">
          <img src={partnershipImage1} alt="Partnership 1" />
          <img src={partnershipImage2} alt="Partnership 2" />
        </div>
      </section>
    </div>
  );
};

export default Blog;
