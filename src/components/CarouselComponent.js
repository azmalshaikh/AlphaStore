import React from "react";
import "./CarouselComponent.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideOne from "../assets/slide/1.jpg";
import slideFive from "../assets/slide/5.jpg";

const carouselImages = ["https://m.media-amazon.com/images/I/81mLrjptpIL._SX1500_.jpg", slideFive, slideOne];

function CarouselComponent() {
  return (
    <Carousel
      className="home__carousel"
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      interval={5000}
      transitionTime={200}
    >
      {carouselImages.map((carouselImage) => (
        <div>
          <img src={carouselImage} alt="carousel" style={{zoom: "140%"}}/>
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselComponent