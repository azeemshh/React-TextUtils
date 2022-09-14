import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar
        title="TextUtils"
        home="Home"
        link="Link"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm heading="Test Your Text" />
      <About aboutText="About Us" />
    </>
  );
};

export default App;
