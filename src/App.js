import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
            <div className='logo'></div>
            <div className='pageNames'>
                <ul>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>            
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
