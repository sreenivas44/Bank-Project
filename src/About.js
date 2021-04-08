import { Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function About() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://www.southindianbank.com/UserFiles/Poster/11025105117151.jpg"
                        height="520" alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.paisabazaar.com/wp-content/uploads/2018/11/Services-Offered-By-Net-banking-Portals.jpg"
                        height="520" alt="Second slide"
                    />

                </Carousel.Item>
                {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docplayer.net/docs-images/49/16403442/images/page_1.jpg"
      height="520" alt="Third slide"
    />
 
   
  </Carousel.Item> */}
            </Carousel>
            <Link to="/">Home</Link>
        </div>
    )
}
export default About;