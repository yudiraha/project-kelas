import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ListMenu from "./Pages/ListMenu";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ListMenu />} path="/list-menu" />
    </Routes>
  );
}

export default App;
