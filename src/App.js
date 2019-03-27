import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from "./Quotes";
import Lamp from './Lamp';

class App extends Component {
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
    const LogoChange = this.state.work ? "App-animation" : "App-logo"
    const ButtonChange = this.state.work ? "working" : "not working"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} 
           className={LogoChange}
            alt="atome"
          /> 

          <a 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button 
          onClick={this.handleClick}
          >{ButtonChange}
        </button>
        </header>
        <Lamp work actif />
        
        <Quotes />
      </div>
    );
  }
}

export default App;
