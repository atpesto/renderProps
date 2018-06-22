import React, { Component } from 'react';

class Mouse extends Component {
  state = {
    x: 0,
    y: 0,
  }

  onMouseMoveHandler = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.onMouseMoveHandler}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Mouse your mouse around:</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )} />
      </React.Fragment>
    )
  }
}


class Cat extends Component {
  render() {
    return (
      <React.Fragment>
        <img alt="cat" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" style={{ position: 'absolute', left: this.props.mouse.x, top: this.props.mouse.y }} />
      </React.Fragment>
    )
  }
}


export default MouseTracker;