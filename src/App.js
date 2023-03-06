import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";

const App = (props) =>{
  
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Dialogs/*" element={<Dialogs state={props.state.dialogsPage} />}></Route>
            <Route path="/Profile/*" element={<Profile state={props.state.profilePage}/>}></Route>
            <Route path="/News/*" element={<News />}></Route>
            <Route path="/Music/*" element={<Music />}></Route>
            <Route path="/Settings/*" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
  );
};

export default App;
