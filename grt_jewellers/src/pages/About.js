import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Our Legacy</h3>
              <p>Celebrating years of trust and excellence.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>CSR Activities</h3>
              <p>Driving change through sustainability and responsibility.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Education and Corporate Sales</h3>
              <p>Empowering through partnerships and collaborations.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* About Main Section */}
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <div className="navigation-links">
          <div className="nav-item">
            <h5>Our Story</h5>
            <p>
              Dive into the history of trust, elegance, and innovation that defines GRT Jewellery.
            </p>
          </div>
          <div className="nav-item">
            <h5>CSR Activities</h5>
            <p>
              Committed to sustainability and contributing positively to our community through CSR efforts.
            </p>
          </div>
          <div className="nav-item">
            <h5>GRT Education</h5>
            <p>
              Offering opportunities for skill development and empowerment to create brighter futures.
            </p>
          </div>
          <div className="nav-item">
            <h5>Corporate Sales</h5>
            <p>
              Partner with GRT for unique offerings in corporate gifting and exclusive partnerships.
            </p>
          </div>
          <div className="nav-item">
            <h5>GRT Offerings</h5>
            <p>
              Explore a wide range of exquisite designs and timeless collections at GRT Jewellery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
