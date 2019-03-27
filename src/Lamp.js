// Lamp.js
import React, { Component } from 'react';

class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: props.work
    };
    
  }
  handleClick = () => {
    this.setState({ work: !this.state.work });
  };
  render() {
    const light = this.state.work ? 'working' : 'not working';
    return (
      <div className="Lamp">
        <button 
          onClick={this.handleClick}
          className={light}
          >
          {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;