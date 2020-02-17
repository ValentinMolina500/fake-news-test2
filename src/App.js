import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoolButton from './CoolButton';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 27
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count * this.state.count
    });
  }

  render() {
    return (
      <div>
        <CoolButton text="Another thing" />
        <CoolButton text="Another thing2"/>
        <CoolButton />
        <CoolButton />
        <CoolButton />
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
