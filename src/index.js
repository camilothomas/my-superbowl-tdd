import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let jitters = false;

function handleBullshit(event) {
  jitters = true;
  ReactDOM.render((jitters) ? element : elementTwo, document.getElementById("root"));
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

ReactDOM.render((jitters) ? element : elementTwo, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
