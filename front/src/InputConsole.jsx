import React, { useState } from "react";
import "./InputConsole.css";

const InputConsole = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="input-console">
      <textarea
        className="input-field"
        value={input}
        onChange={handleChange}
        placeholder="Enter test cases here..."
      />
    </div>
  );
};

export default InputConsole;
