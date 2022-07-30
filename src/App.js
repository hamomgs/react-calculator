import React, { Component } from 'react';
import Calculator from './components/Calculator.js';
import { GlobalStyle } from './assets/styles/globalStyles';


export default class App extends Component {
  render() {
    return (
        <div>
          <GlobalStyle />
          <Calculator />
        </div>
    )
  }
}