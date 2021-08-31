import React from "react";
import Landing from "./components/Landing";
import GlobalStyle from "./components/GlobalStyle";
import NavB from "./components/NavB";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavB />
      <Landing />
    </div>
  );
}

export default App;
