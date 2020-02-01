import React from 'react';
import './App.css';
import Sketch from 'react-p5'
import InputView from "./Views/Input/InputView";

function App() {

    const setup = (p5, canvasParent) => {
        p5.createCanvas(1000,800).parent(canvasParent)
    };

    const draw = p5 => {
        p5.background(p5.random(55))

    };

    const preload = () => {

    };


  return (
      <React.Fragment>
          {/*<Sketch setup ={setup} draw = {draw}/>*/}
          <InputView/>
      </React.Fragment>
  );
}

export default App;
