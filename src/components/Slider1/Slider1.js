import React, { Component } from "react";
import Slider from "react-slick";


export default class Slider1 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>Related Products</h2>
        <Slider {...settings}>
          <div>
            <img src="https://m.media-amazon.com/images/I/31smn8fDvrL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/315p913oL9L._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/51Q1tNCJgkS._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/31Zq-alRH9L._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/71357Tvw0NS._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/419AN2XfRjL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/81QqVNKWtML._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/812YsUxpyfL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/81Ke5qtC6oL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/51hwUO-kAqL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/516LU0H963L._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/81Ke5qtC6oL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/51Jsw7HDH0L._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/518U63NIvRL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/51xk36Nn1zL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/51L+EHKeBjL._AC_SY200_.jpg" alt="" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/51OZcrtHduL._AC_SY200_.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}