import Main from "./components/Main";
import { useState } from "react";

import './App.css';

function App() {

  const [left,setLeft] = useState(false);
  const [right,setRight] = useState(false);
  const [bottom,setBottom] = useState(false);
  const [top,setTop] = useState(true);
  const [text,setText] = useState('top');

  const leftClick = (e) => {
    e.preventDefault();
    setLeft(true);
    setText("left");
    setBottom(false);
    setRight(false);
    setTop(false);
  }
  const rightClick = (e) => {
    e.preventDefault();
    setLeft(false);
    setBottom(false);
    setRight(true);
    setTop(false);
    setText('right');
    
  }
  const topClick = (e) => {
    e.preventDefault();
    setLeft(false);
    setBottom(false);
    setRight(false);
    setTop(true);
    setText("top");
    
  }
  const bottomClick = (e) => {
    e.preventDefault();
    setLeft(false);
    setBottom(true);
    setRight(false);
    setTop(false);
    setText('bottom');
    
  }

  return (
    <div className="App">
      <div className="select-pos">
        <p>Select the position of the hover...</p>
        <button className={left ? 'btn-select' : ''} onClick={leftClick}>Left</button>
        <button className={top ? 'btn-select' : ''} onClick={topClick}>Top</button>
        <button className={right ? 'btn-select' : ''} onClick={rightClick}>Right</button>
        <button className={bottom ? 'btn-select' : ''} onClick={bottomClick}>Bottom</button>
      </div>
      <Main text={text}/>
      
    </div>
  );
}

export default App;
