// src/App.js
import React from "react";
import "./App.css";
import Login from "./components/login";
import Navigator from "./components/Navigator";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Login />
    </div>
  );
}

export default App;
