import React, { useState } from "react";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState(`public class Main {
  public static void main(String[] args) {
      System.out.println("FAST. GOOD. CHEAP. Choose any two.");
  }
}

// Comment`);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="editor">
      <textarea
        value={code}
        onChange={handleChange}
        className="code-input"
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
