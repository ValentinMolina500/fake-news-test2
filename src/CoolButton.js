import React from 'react';

class CoolButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <button>{this.props.text}</button>
  }
}

export default CoolButton;