import React from 'react';
import Slide from './Slide';

class Index extends React.Component {
  render() {
    return (
      <div className="slider">
        {}
        <Slide  />
        <div className="slider__arrow--prev"></div>
        <div className="slider__arrow--next"></div>
      </div>
    );
  }
}

export default Index;