import React from 'react';
import Slide from './Slide';
import { data } from './Data';

class Index extends React.Component {
  render() {
    return (
      <div className="slider">
        {
          data.map(img => {
            return <Slide key={img.id} url={img.url} />
          })
        }
        <div className="slider__arrow--prev"></div>
        <div className="slider__arrow--next"></div>
      </div>
    );
  }
}

export default Index;