import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './E-components/ExampleCarouselImage';
// import logo  from './images/logo.png'
function UncontrolledExample() {
  return (
    <Carousel style={{width:'100%',height:'75vh'}}>
      <Carousel.Item  >
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src='https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?cs=srgb&dl=pexels-tyler-hendy-9620-53265.jpg&fm=jpg' alt='' style={{width:'100%',height:'75vh'}}/>
        <Carousel.Caption style={{color:'black'}}>
          <h3>Photography Studio</h3>
          
          <p>Natural Light Studios: Designed with large windows to provide ample natural light for photography.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src='https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?cs=srgb&dl=pexels-dmitry-demidov-515774-3783471.jpg&fm=jpg' alt='' style={{width:'100%',height:'75vh'}}/>
        <Carousel.Caption>
          <h3>Music Studio</h3>
          <p>Recording Studios: Soundproof rooms with high-quality microphones, mixing consoles, and instruments for recording music.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src='https://pixelz.cc/wp-content/uploads/2018/07/studio-background-with-spotlights-uhd-4k-wallpaper.jpg' alt='' style={{width:'100%',height:'75vh'}}/>
        <Carousel.Caption>
          <h3>Video Production Studio</h3>
          <p>
        Blue Screen Studios: Includes green screens and lighting setups for chroma key compositing
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;