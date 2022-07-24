import React, { useState } from "react";

function App() {
  const [typedText, setTypedText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setTypedText(event.target.value);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, typedText];
    });
    setTypedText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Next To-Do"
          value={typedText}
        />
        <button type="submit" onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
