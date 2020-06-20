import React from 'react';

class Slide extends React.Component {
  render() {
    return (
      <div className="slider__slide">
        <img src={this.props.url} className="slider__image"/>
      </div>
    );
  }
}

export default Slide;
