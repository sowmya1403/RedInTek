import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="home__text">
          <div className="home__bulletin">Best Solution We Offer You</div>
          <h1>Make a Good Plan and Grow Your Business</h1>
          <p>This is the home page where you can start your journey with REDINTEK.</p>
          <a href="#get-started" className="home__cta">Get Started</a>
        </div>
        <div className="home__image">
          <img
            src="https://img.freepik.com/free-photo/young-beautiful-modern-woman-having-laptop-hands-leaning-white-wall_231208-2741.jpg"
            alt="Home"
          />
        </div>
      </section>

      <section className="home-section">
        <div className="home__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQ9LXHsQGk6aROgz2lAyIvmfR3Zk5mZRfyA&s"
            alt="Home"
            className="home__image-img"
          />
        </div>
        <div className="home__text home__text-reverse">
          <div className="home__bulletin">Discover Our Expertise</div>
          <h1>We are  dynamic team of creative design and development</h1>
          <p>Redintek is a Tech Soul for your Business, provides exclusive IT solutions in the areas of software designing and web development, cyber security & digital marketing in all over the world. Our purpose is to deliver an inspirational and innovative solution for our clients.</p>
          <a href="#learn-more" className="home__cta">Know More</a>
        </div>
      </section>
    </div>
  );
};

export default Home;











