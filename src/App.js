import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="content">
            <div className='logo'>Bootstrap</div>
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
        </nav>
      </div>
    );
  }
}

export default App;
