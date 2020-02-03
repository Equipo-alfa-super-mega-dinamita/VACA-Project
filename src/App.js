/* eslint-disable */

import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './P5/sketch.js'

import InputView from "./Views/Input/InputView";

function App() {
    //P5_experience();

    const [processed, setProcessed] = React.useState(null);
    const sk = sketch;
  return (
      <React.Fragment>
          {processed!=null?<P5Wrapper sketch = {sk} proc={processed}/>:<div/>}
          {processed==null?<InputView startAnim={(pro)=>setProcessed(pro)}/>:<div/>}
      </React.Fragment>
  );
}

export default App;
