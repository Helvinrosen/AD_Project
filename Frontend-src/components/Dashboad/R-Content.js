import React, { useState, useEffect } from 'react';

const ScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('reveal-div');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ minHeight: '75vh', padding: '20px' }}>
      <div
        id="reveal-div"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0px)' : 'translateY(80px)',
          transition: 'opacity 2.0s ease-out, transform 1.5s ease-out',
          height: '60vh',
          backgroundColor: 'black',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          border: 'none',
          borderRadius: '4vh',
          padding: '2rem',
          color: 'white',
          textAlign: 'center',
          marginTop: '5vh',
          width: '100%',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          overflow: 'hidden',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '5vh' }}>Studio Rental</h1>
        
        <div
          style={{
            maxHeight: '45vh',
            overflowY: 'auto',
            marginTop: '2vh',
            paddingRight: '1rem',
          }}
        >
          <p style={{ margin: 0, fontSize: '3vh', lineHeight: '4vh' }}>
            Renting a studio provides a dedicated space for creative projects, whether 
            it's for photography, video production, or audio recording. 
            Studios offer specialized equipment and settings to enhance your work, making them
            ideal for both professionals and enthusiasts. Renting allows flexibility in scheduling and duration, giving you control 
            over your production needs without long-term commitments. With a range of options available, you can choose a studio that 
            fits your specific requirements and budget. It's a convenient solution for achieving high-quality results in a 
            controlled environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollReveal;
