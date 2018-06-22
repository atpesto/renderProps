import React, { Component } from 'react';

class MouseTracker extends Component {
  state = {
    xPos: 0,
    yPos: 0,
  }

  onMouseMoveHandler = (e) => {
    this.setState({
      xPos: e.clientX,
      yPos: e.clientY,
    })
  }

  render() {
    return (
      <div onMouseMove={this.onMouseMoveHandler}>
        <p>X Position is: {this.state.xPos}</p>
        <p>Y Position is: {this.state.yPos}</p>
      </div>
    );
  }
}


export default MouseTracker;