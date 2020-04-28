import React from "react";
import "./App.css";
import logo from "./assets/img/logo.png";
import Section from "./components/Section";

function App() {
  return (
    <>
      <img className="logo" alt="logo" src={logo} />
      <Section className="Emissions TV" num="0" />
      <Section className="Séries françaises" num="1" />
      <Section className="Comédies" num="2" />
      <Section className="Nouveautés" num="3" />
      <Section className="Documentaires" num="4" />
      <Section className="Séries US" num="5" />
    </>
  );
}

export default App;
