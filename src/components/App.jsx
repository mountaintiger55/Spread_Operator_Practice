import React, { useState } from "react";

function App() {
  const [typedText, setTypedText] = useState("");
  const [newItem, setNewItem] = useState("");
  var itemList = [];

  function handleChange(event) {
    setTypedText(event.target.value);
  }

  function handleClick() {
    setNewItem(typedText);
    itemList.push(newItem);
    console.log(itemList);
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
          <li>A Item</li>
          <li>{newItem}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
