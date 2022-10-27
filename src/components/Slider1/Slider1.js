import React, { Component } from "react";
import Slider from "react-slick";


export default class Slider1 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>Related Products</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}