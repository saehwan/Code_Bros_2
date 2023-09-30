import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/topbar.component";
import BottomBar from "./components/BottomBar/bottombar.component";
import Home from "./components/Home/home.component";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <TopBar />
      <div className="focusedContent">
        <Routes>
          <Route path="/" element={<Home />} index />
        </Routes>
      </div>
      <BottomBar />
    </div>
  );
};

export default App;
