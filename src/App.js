import React from 'react';
import './App.css';
let jitters = false;

function handleBullshit(event) {
  jitters = true;
}

function Blob(props) {
  return <div className={props.className} onClick={props.onClick}></div>;
}

const element = (
  <div className="flexMe">
    <Blob className="demDivs"  />
    <Blob className="repubDivs" />
    <Blob className="marlboroDivs" />
  </div>
);

const elementTwo = (
<div className="flexMe">
    <Blob className="repubDivs" onClick={handleBullshit}/>
    <Blob className="demDivs" />
    <Blob className="repubDivs" />
  </div>
);
function App() {
  if (jitters) return (element);
  else return (elementTwo);
}

export default App;
