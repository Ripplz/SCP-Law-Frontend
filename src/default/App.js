import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../main/home/homepage";
import Team from "../main/team/team";

function App() {
  return (
    <div className="app_wrapper">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/team" component={Team} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
