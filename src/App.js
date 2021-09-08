import React from "react";
import Landing from "./components/Landing";
import GlobalStyle from "./components/GlobalStyle";
import NavB from "./components/NavB";
import TheVan from "./components/TheVan";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavB />
      <Landing />
      <TheVan />
      <AboutUs />
    </div>
  );
}

export default App;
