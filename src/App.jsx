import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
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

      <Alert alert={alert} />

      <TextForm showAlert={showAlert} heading="Test Your Text" mode={mode} />

      <About aboutText="About Us" mode={mode} />
    </>
  );
};

export default App;
