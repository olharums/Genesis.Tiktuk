import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import ContextedApp from "./app";

declare global {
  interface Window {
    cordova: any;
  }
}

window.cordova = window.cordova || false;

const startApp = () => {
  ReactDOM.render(<ContextedApp />, document.getElementById("root"));
};

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener("deviceready", startApp, false);
}

reportWebVitals();
