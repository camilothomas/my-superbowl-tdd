import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
function Blob(props) {
  return <div className={props.className}></div>;
}

const element = (
  <div className="flexMe">
    <Blob className="demDivs" />
    <Blob className="repubDivs" />
    <Blob className="marlboroDivs" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
