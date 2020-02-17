import React from 'react';
import firebase from './firebase';
class ClaimInput extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    firebase.query('/claims')
    .then((data) => this.setState({data: data.val()}))
  }

  printInput = (e) => {
    console.log(e.target)
    this.setState({
      input: e.target.value
    })
  }

  renderClaims = () => {
    return Object.keys(this.state.data).map(key => {
      return <h1>{this.state.data[key].claim}</h1>
    })}

  render() {
    return (
      <div>
        <h1>eer</h1>
        {this.renderClaims()}
      </div>


    )
  }
}

export default ClaimInput;