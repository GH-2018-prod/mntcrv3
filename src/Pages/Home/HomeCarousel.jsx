import Carousel from 'react-bootstrap/Carousel';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

export const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <Link to="/clases">
          <img
            id="header1"
            className="d-block w-100"
            src={ isMobile ?  "../adultos_1200x1200.jpeg" : "../adultos_1600x600.jpeg" }
            alt="First slide"
          />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to="/clases">
          <img
            className="d-block w-100"
            src={ isMobile ?  "../ninos_1200x1200.jpeg" : "../ninos_1600x600.jpeg" }
            alt="Second slide"
          />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <Link to="/clases">
        <img
          className="d-block w-100"
          src={ isMobile ?  "../adultos_1200x1200.jpeg" : "../adultos_1600x600.jpeg" }
          alt="Third slide"
        />
        </Link>
      </Carousel.Item>
    </Carousel>
  )
}
