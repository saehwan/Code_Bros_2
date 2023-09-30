import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/topbar.component";
import BottomBar from "./components/BottomBar/bottombar.component";
import TravelPage from "./components/Travel/TravelPage/travel.component";
import Home from "./components/Home/home.component";
import SchedulePage from "./components/SchedulePage/schedule.component";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <TopBar />
      <div className="focusedContent">
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </div>
      <BottomBar />
    </div>
  );
};

export default App;
