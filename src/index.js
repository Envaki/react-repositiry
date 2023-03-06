import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let messagges = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hi, is you" },
  { id: 3, message: "HI hiih" },
  { id: 4, message: "Yo Yo Yo" },
];

let dialogs = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "VAlera" },
  { id: 4, name: "Oper" },
  { id: 5, name: "Oleg" },
];
let posts = [
  { id: 1, message: "HI, how are you?Hi", like: "15" },
  { id: 2, message: "HI, it my first post", like: "20" },
  { id: 3, message: "sadasdasda", like: "33" },
  { id: 4, message: "ssssssssssss", like: "12" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App messagges={messagges} dialogs={dialogs} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
