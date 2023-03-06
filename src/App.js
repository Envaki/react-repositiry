import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Dialogs/*" element={<Dialogs dialogs={props.dialogs} messagges={props.messagges}/>}></Route>
            <Route path="/Profile/*" element={<Profile posts={props.posts}/>}></Route>
            <Route path="/News/*" element={<News />}></Route>
            <Route path="/Music/*" element={<Music />}></Route>
            <Route path="/Settings/*" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
