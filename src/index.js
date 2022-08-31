import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App/App";
import reportWebVitals from "./Utils/reportWebVitals";
import store from "./Utils/store";
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
