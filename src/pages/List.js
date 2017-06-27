import React, { Component } from 'react';
import Slider from 'react-slick';

import '../css/List.css';

import image1 from '../images/x1.png';
import image2 from '../images/x2.png';
import image3 from '../images/x3.png';
import image4 from '../images/x4.png';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <img src={image1} alt="X1" title="X1" />
        <img src={image2} alt="X2" title="X2" />
        <img src={image3} alt="X3" title="X3" />
        <img src={image4} alt="X4" title="X4" />
      </Slider>
    );
  }
}

export default class List extends Component {
  render () {
    return (
      <div className="List">
        <header>
          <h2>商品一覧</h2>
        </header>
        <div className="slider-wrapper">
          <h3>X Kit Series</h3>
          <SimpleSlider  />
        </div>
      </div>
    )
  }
};


