import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/recipe" />
    </div>
  );
}

export default App;
