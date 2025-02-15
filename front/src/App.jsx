import React from "react";
import Header from "./Header";
import CodeEditor from "./CodeEditor";
import InputConsole from "./InputConsole";
import OutputConsole from "./OutputConsole";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <CodeEditor />
        <div className="console-container">
          <InputConsole />
          <OutputConsole />
        </div>
      </div>
    </div>
  );
};

export default App;
