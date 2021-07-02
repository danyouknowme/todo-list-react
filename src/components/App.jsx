import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const [input, setInput] = useState("");

  function handleChange(event) {
    const newItem = event.target.value;
    setInput(newItem);
  }

  function addItem() {
    setItems((prevItem) => [...prevItem, input]);
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={addItem}>
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
