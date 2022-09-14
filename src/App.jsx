import React from "react";
import About from "../refurb/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm heading="Test Your Text" />
      <About />
    </>
  );
};

export default App;
