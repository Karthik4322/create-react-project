import React from 'react';
import { Carousel } from 'react-bootstrap';
import MyimageComp from '../components/MyimageComp';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Carousel Section */}
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imgpath.bangle} class="d-block w-100" alt="bangles"/>
    </div>
    <div class="carousel-item">
      <img src="../assets/images/necklace" class="d-block w-100" alt="necklace"/>
    </div>
    <div class="carousel-item">
      <img src={imgpath.stone} class="d-block w-100" alt="stone_necklace"/>
    </div>
    <div class="carousel-item">
      <img src={imgpath.gem} class="d-block w-100" alt="gem_stone"/>
    </div>
    <div class="carousel-item">
      <img src={imgpath.nlace} class="d-block w-100" alt="necklace"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
