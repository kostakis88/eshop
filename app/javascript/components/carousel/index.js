import React from 'react';
import Slide from './Slide';
import { data } from './Data';

class Index extends React.Component {
  state = {
    activeIndex: 0
  };

  handlePrevClick = () => {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: activeIndex > 0 ? activeIndex - 1: activeIndex
    });
  }
  
  handleNextClick = () => {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: activeIndex < 2 ? activeIndex + 1 : activeIndex
    });
  }

  render() {
    const { activeIndex } = this.state;
    const transformStyles = {
      transform: `translate3d(${activeIndex * (-100)}%, 0px, 0px)`,
      transitionDuration: '350ms' 
    };
    return (
      <div className="slider-container">
        <div className="slider" style={transformStyles}>
          {
            data.map(img => {
              return <Slide key={img.id} url={img.url} />
            })
          }
        </div>
        <div className="slider__arrow slider__arrow--prev" onClick={this.handlePrevClick}>prev</div>
        <div className="slider__arrow slider__arrow--next" onClick={this.handleNextClick}>next</div>
      </div>
    );
  }
}

export default Index;