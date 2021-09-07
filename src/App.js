import React from "react";
import Landing from "./components/Landing";
import GlobalStyle from "./components/GlobalStyle";
import NavB from "./components/NavB";
import TheVan from "./components/TheVan";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavB />
      <Landing />
      <TheVan />
    </div>
  );
}

export default App;
