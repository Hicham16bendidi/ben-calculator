import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState(""); // State to store the input
  const [result, setResult] = useState(""); // State to store the result

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Evaluate the input
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear input
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value); // Append value to input
    }
  };

  return (
    <div className="calculator">
      <h1>Ben Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+", "C"].map(
          (item, index) => (
            <button key={index} onClick={() => handleClick(item)}>
              {item}
            </button>
          )
        )}
      </div>
      <footer>
        &copy; Bendidi 2025, All rights reserved.
    </footer>
    </div>
    
  );
}

export default Calculator;