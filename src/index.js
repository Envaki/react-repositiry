import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireThree =(state)=> {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
        state={store.getState()} 
        dispatch={store.dispatch.bind(store)} 
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
rerenderEntireThree(store.getState());

store.subscribe(rerenderEntireThree);


reportWebVitals();


