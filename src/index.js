import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, { addPost, subscribe, updateNewPostText} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireThree =(state)=> {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};
rerenderEntireThree(state);
subscribe(rerenderEntireThree);


reportWebVitals();


