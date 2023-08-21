import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import myImage1 from '../images/carousel-img1.jpg';
import myImage2 from '../images/carousel-img2.jpg';
import myImage3 from '../images/carousel-img3.jpg';


const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ height: '90.5vh' }}>
          <img className='d-block w-1oo' src={myImage1} alt='first-slide' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item style={{ height: '90.5vh' }}>
          <img className='d-block w-100' src={myImage2} alt='second-slide' style={{ height: '100%', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item style={{ height: '90.5vh' }}>
          <img className='d-block w-100' src={myImage3} alt='third-slide' style={{ height: '100%', objectFit: 'cover' }} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
