import { Routes, Route } from "react-router-dom";
import React from "react";
import Cover from "./Cover";
import About from "./About";
import TopBar from "./TopBar";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <Cover />
      <About />
    </>
  );
};

export default App;
