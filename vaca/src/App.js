import React from 'react';
import './App.css';
import Sketch from 'react-p5'


function App() {
    const setup = (p5, canvasParent) => {
        p5.createCanvas(1000,800).parent(canvasParent)
    };
    const draw = p5 => {
        p5.background(p5.random(55))
    };
  return (
      <React.Fragment>
          <Sketch setup ={setup} draw = {draw}/>
      </React.Fragment>
  );
}

export default App;
