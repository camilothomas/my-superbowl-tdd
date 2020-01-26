import React from 'react';
import './App.css';
import Blob from "./Blob";
let jitters = false;

function handleBs(event) {
  jitters = true;
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
    <Blob className="repubDivs" onClick={handleBs}/>
    <Blob className="demDivs" />
    <Blob className="repubDivs" />
  </div>
);

class App extends React.Component {
    render() {
        return (
            <div className="flexMe">
                <Blob className="repubDivs" onClick={handleBs}/>
                <Blob className="demDivs" />
                <Blob className="repubDivs" />
            </div>
        );
    }
}

export default App;
