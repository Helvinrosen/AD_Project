// ExampleCarouselImage.js
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import logo from './images/logo.png'
const ExampleCarouselImage = ({ text }) => {
  return (
    <div className="example-carousel-image" style={{ position: 'relative',width:'100%',height:'75vh' }}>
      <Image 
        src={logo}
        alt={text}
        style={{width:'500px',height:'500px'}}
        fluid
      />
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          color: 'white', 
          fontSize: '2rem', 
          textShadow: '1px 1px 2px black' 
        }}
      >
        {text}
      </div>
    </div>
  );
};

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
