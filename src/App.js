import React from 'react';
import './App.css';
import Sketch from 'react-p5'

import CodeEditor from "./Ace/CodeEditor";

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
          <CodeEditor placeholder={"Enter your code here"}/>
          <Sketch setup ={setup} draw = {draw}/>
      </React.Fragment>
  );
}

export default App;
