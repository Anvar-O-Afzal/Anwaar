import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs="false">
                <div>
                    <img src="images/c1.jpg" />
                    <p className="level"></p>
                </div>
                <div>
                    <img src="images/c2.jpg" />
                    <p className="level"></p>
                </div>
                <div>
                    <img src="images/c3.jpg" />
                    <p className="level"></p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;