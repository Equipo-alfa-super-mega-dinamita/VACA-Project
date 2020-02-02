/* eslint-disable */

import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './P5/sketch.js'

import InputView from "./Views/Input/InputView";

function App() {
    //P5_experience();

    const sk = sketch
  return (
      <React.Fragment>
          <P5Wrapper sketch = {sk} />
          {/*<InputView/>*/}
      </React.Fragment>
  );
}

export default App;
