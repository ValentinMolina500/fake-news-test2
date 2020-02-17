import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoolButton from './CoolButton';
import ClaimInput from './ClaimInput';
import firebase from "./firebase"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 27
    }
  }

  myAlert = () => {
    alert("this is a test")
  }
  increment = () => {
    this.setState({
      count: this.state.count * this.state.count
    });
  }

  render() {
    return (
      <div>
        <ClaimInput />
      </div>
    )
  }
}
// function App() {
//   return (
//     <button>er</button>
//   );
// }

export default App;
