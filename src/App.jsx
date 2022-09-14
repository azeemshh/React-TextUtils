import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  return (
    <>
      <Navbar title='TextUtils'/>
      <TextForm heading='Test Your Text'/>
    </>
  );
};

export default App;
