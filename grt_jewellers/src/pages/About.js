import React from 'react';
import '../styles/about.css';
import { Carousel } from 'react-bootstrap'
import ExampleCarouselImage from '../components/ExampleCarouselImage';

const carouselcenter =()=>{
    img ={
      "display": "flex",
      "justify-content": "center",
      "align-items": "center", 
      "height": "100vh"
    }
}
const About = () => {
  return (
<div>
    <Carousel>
      <Carousel.Item interval={1000}>
       
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <img style={carouselcenter} src={ExampleCarouselImage.bangle} alt="" height="400px" width ="600px"/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
       
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        <img style={carouselcenter} src={ExampleCarouselImage.gem} alt="Second slide" height="400px" width ="600px" />
      </Carousel.Item>
      <Carousel.Item>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <img style={carouselcenter} src={ExampleCarouselImage.nl} alt="Second slide" height="400px" width ="600px"/>
    </Carousel>
</div>

     
  );
};

export default About;
