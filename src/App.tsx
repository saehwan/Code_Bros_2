import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/topbar.component";
import BottomBar from "./components/BottomBar/bottombar.component";
import Focus from "./components/Focus/focus.component";
import TravelPage from "./components/TravelPage/travel.component";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <TopBar />
      <div className="focusedContent">
        <Routes>
          <Route path="/" element={<Focus />} index />
          <Route path="/travel" element={<TravelPage />} />
        </Routes>
      </div>
      <BottomBar />
    </div>
  );
};

export default App;
